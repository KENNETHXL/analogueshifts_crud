<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HireController;


Route::middleware(['auth', 'verified'])->prefix("hire")->name("hire.")->group(function () {
    Route::get('/', [HireController::class, "index"])->name('index');
    Route::get('/myhire', [HireController::class, "myhire"])->name('myhire');
    Route::get('/apply', [HireController::class, "all"])->name('apply');
    Route::get('/talents', [HireController::class, "create"])->name('talents');
    Route::post("/", [HireController::class, "store"])->name("store");
    Route::get('/{hire:slug}/edit', [HireController::class, "edit"])->name('edit');
    Route::put('/{hire}', [HireController::class, "update"])->name('update');
    Route::get('/view/{hire:slug}', [HireController::class, "show"])->name('view');
    Route::delete('/{hire}', [HireController::class, "delete"])->name('delete');
});