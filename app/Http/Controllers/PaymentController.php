<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            "amount" => ["int", "required"],
            "created_at" => ["required", "date"],
            "status" => ["required", "string"],
            "flw_ref" => ["required", "string"],
            "transaction_id" => ["required", "integer"],
            "tx_ref" => ["required", "string"],
            "customer.tel" => ["string"]
        ]);

        $payment = auth()->user()->payments()->create([
           "amount" => $validated['amount'],
           'user_id' => auth()->id(),
           'tx_date' => date('Y-m-d H:i:s', strtotime($validated['created_at'])),
           'tx_ref' => $validated['tx_ref'],
           'transaction_id' => $validated['transaction_id'],
           'flw_ref' => $validated['flw_ref'],
            'status' => $validated['status'],
//           'tel' => $validated['customer.tel']
        ]);

        return $payment;
    }
}
