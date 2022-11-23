<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('construction', function () {
    return Inertia::render('Construction');
})->name('construction');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/profile', function () {
    return Inertia::render('Profile');
})->middleware(['auth', 'verified'])->name('profile');

Route::get('dashboard/payments', function () {
    return Inertia::render('Admin/Payments/Index');
})->middleware(['auth', 'verified'])->name('payments');

Route::get('dashboard/payments/view', function () {
    return Inertia::render('Admin/Payments/View');
})->middleware(['auth', 'verified'])->name('payments.view');

Route::get('dashboard/payments/edit', function () {
    return Inertia::render('Admin/Payments/Edit');
})->middleware(['auth', 'verified'])->name('payments.edit');

Route::get('/pay', function () {
    return Inertia::render('Pay');
})->middleware(['auth', 'verified'])->name('pay');

Route::get('/package', function () {
    return Inertia::render('Package');
})->middleware(['auth', 'verified'])->name('package');

Route::get('/talents', function () {
    return Inertia::render('Talents');
})->middleware(['auth', 'verified'])->name('talents');

Route::get('/vets', function () {
    return Inertia::render('Vet/Index');
})->middleware(['auth', 'verified'])->name('vets');

Route::get('/create', function () {
    return Inertia::render('Vet/Create');
})->middleware(['auth', 'verified'])->name('create');

Route::get('/edit', function () {
    return Inertia::render('Vet/Edit');
})->middleware(['auth', 'verified'])->name('edit');

Route::get('/response', function () {
    return Inertia::render('Vet/Response');
})->middleware(['auth', 'verified'])->name('response');

Route::get('/result', function () {
    return Inertia::render('Vet/Result');
})->middleware(['auth', 'verified'])->name('result');

Route::get('/vetting', function () {
    return Inertia::render('Vet/Vetting');
})->middleware(['auth', 'verified'])->name('vetting');

Route::get('about', function () {
    return Inertia::render('About');
})->name('about');


include __DIR__ . "/web/learn.php";
include __DIR__ . "/web/blog.php";


require __DIR__.'/auth.php';
