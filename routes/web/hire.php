<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HireController;

// Route::get("hire/{hire:id}", [HireController::class, "show"])->name("hire.view");

Route::middleware(['auth', 'verified'])->prefix("hire")->name("hire.")->group(function () {
    Route::get('/', [HireController::class, "index"])->name('index');
    Route::get('/apply', [HireController::class, "all"])->name('apply');
    Route::get('/talents', [HireController::class, "create"])->name('talents');
    Route::post("/", [HireController::class, "store"])->name("store");
    Route::get('/edit', [HireController::class, "edit"])->name('edit');
    Route::get('/view/{id}', [HireController::class, "show"])->name('view');
    Route::delete('/{hire}', [HireController::class, "delete"])->name('delete');
});