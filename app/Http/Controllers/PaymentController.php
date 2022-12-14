<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule as ValidationRule;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function index()
    {
        return Inertia::render('Payment');
    }

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
            // 'tel' => $validated['customer.tel']
        ]);

        return $payment;
    }

    public function records()
    {
        if (auth()->user()->role == 'admin'){
            // return Payment::all();
            $payments = Payment::latest()->get();
            return Inertia::render('Admin/Payments/Index')->with('payments', $payments);
        }elseif (auth()->user()->role == 'staff'){
            return redirect()->route("staff");
        }
        return redirect()->route("payment.index");
        
    }

    public function view(Payment $id)
    {
        if (auth()->user()->role == 'admin'){
            $payment = Payment::find($id);
            return Inertia::render('Admin/Payments/View')->with('payment', $payment);
        }
        return redirect()->route("payment.index");
        
    }

    public function edit()
    {
        if (auth()->user()->role == 'admin'){
            return Inertia::render('Admin/Payments/Edit');
        }
        return redirect()->route("payment.index");
        
    }

    public function package()
    {
        return Inertia::render('Package');
    }
    
}
