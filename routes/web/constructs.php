<?php
use Inertia\Inertia;

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/profile', function () {
    return Inertia::render('Profile');
})->middleware(['auth', 'verified'])->name('profile');

Route::get('staff', function () {
    return Inertia::render('Admin/Staff');
})->name('staff'); 

Route::get('about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('construction', function () {
    return Inertia::render('Construction');
})->name('construction');    