<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaymentController;

Route::post("/payment", [PaymentController::class, "store"])->name("payment.store");
Route::get('/packages', [PaymentController::class, "package"])->name('payment.package');

Route::middleware(['auth', 'verified'])->prefix("dashboard/payment")->name("payment.")->group(function () {
    Route::get('/', [PaymentController::class, "index"])->name('index');
    Route::get('/records', [PaymentController::class, "records"])->name('records');
    Route::get('/view', [PaymentController::class, "view"])->name('view');
    Route::get('/edit', [PaymentController::class, "edit"])->name('edit');
});