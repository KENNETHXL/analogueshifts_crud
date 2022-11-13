<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LearnController;


Route::middleware(['auth', 'verified'])->prefix("/learn")->name("learn.")->group(function () {
    Route::get('/', [LearnController::class, "dashboard"])->name('index');
    Route::get('/create', [LearnController::class, "create"])->name('create');
    Route::post("/learn", [LearnController::class, "store"])->name("store");
    Route::get('/{learn:slug}/edit', [LearnController::class, "edit"])->name('edit');
    Route::put('/{learn:slug}', [LearnController::class, "update"])->name('update');
    Route::delete('/{learn}', [LearnController::class, "delete"])->name('delete');
});