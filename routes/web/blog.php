<?php

use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;

Route::get("blogs", [BlogController::class, "all"])->name("blogs");
Route::get("blogs/{blog:slug}", [BlogController::class, "show"])->name("blog.show");

Route::middleware(['auth', 'verified'])->prefix("admin/blogs")->name("blog.")->group(function () {
    Route::get('/', [BlogController::class, "dashboard"])->name('index');
    Route::get('/create', [BlogController::class, "create"])->name('create');
    Route::post("/", [BlogController::class, "store"])->name("store");
    Route::get('/{blog}/edit', [BlogController::class, "edit"])->name('edit');
    Route::put('/{blog}', [BlogController::class, "update"])->name('update');
    Route::delete('/{blog}', [BlogController::class, "delete"])->name('delete');
});