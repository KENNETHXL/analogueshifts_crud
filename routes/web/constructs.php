<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AllController;


Route::middleware(['auth', 'verified'])->prefix("dashboard")->group(function () {
    Route::get('/users', [AllController::class, "index"])->name('users');
    Route::get('/user/{user:id}', [AllController::class, "edit"])->name('user');
    Route::put('/{user}', [AllController::class, "update"])->name('user.update');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('staff', function () {
    return Inertia::render('Admin/Staff');
})->name('staff'); 

Route::get('construction', function () {
    return Inertia::render('Construction');
})->name('construction');    