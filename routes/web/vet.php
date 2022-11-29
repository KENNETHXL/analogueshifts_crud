<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VetController;

// Route::resource('vets', 'VetController');

// Route::get("vet", [BlogController::class, "show"])->name("blog.show");

Route::middleware(['auth', 'verified'])->prefix("vet")->name("vet.")->group(function () {
    Route::get('/', [VetController::class, "index"])->name('index');
    Route::get('/create', [VetController::class, "create"])->name('create');
    Route::get('/edit', [VetController::class, "edit"])->name('edit');
    Route::get('/response', [VetController::class, "response"])->name('response');
    Route::get('/result', [VetController::class, "result"])->name('result');
    Route::get('/vetting', [VetController::class, "vetting"])->name('vetting');
});