<?php

use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->prefix("blogs")->name("blog.")->group(function () {
    Route::get('/dashboard', [BlogController::class, "dashboard"])->name('index');
    Route::get('/create', [BlogController::class, "create"])->name('create');
    Route::post("/learn", [BlogController::class, "store"])->name("store");
    Route::get('/{blog}/edit', [BlogController::class, "edit"])->name('edit');
    Route::put('/{blog}', [BlogController::class, "update"])->name('update');
    Route::delete('/{blog}', [BlogController::class, "delete"])->name('delete');
});