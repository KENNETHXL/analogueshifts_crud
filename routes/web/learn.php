<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LearnController;


Route::get("/learn", [LearnController::class, "all"])->name("learn.all");

Route::middleware(['auth', 'verified'])->prefix("admin/learn")->name("learn.")->group(function () {
    Route::get('/dashboard', [LearnController::class, "dashboard"])->name('index');
    Route::get('/create', [LearnController::class, "create"])->name('create');
    Route::post("/learn", [LearnController::class, "store"])->name("store");
    Route::get('/{learn:slug}/edit', [LearnController::class, "edit"])->name('edit');
    Route::put('/{learn:slug}', [LearnController::class, "update"])->name('update');
    Route::delete('/{learn}', [LearnController::class, "delete"])->name('delete');
});
