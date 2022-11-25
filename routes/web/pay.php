<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaymentController;

Route::post("pay", [PaymentController::class, "store"])->name("payment.store");
