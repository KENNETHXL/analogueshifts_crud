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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('blog', function () {
    return Inertia::render('Blog');
})->name('blog');

Route::get('talents', function () {
    return Inertia::render('Talents');
})->name('talents');

Route::get('about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('vets', function () {
    return Inertia::render('Vet/Index');
})->name('vets');

Route::get('create', function () {
    return Inertia::render('Vet/Create');
})->name('create');

Route::get('edit', function () {
    return Inertia::render('Vet/Edit');
})->name('edit');

Route::get('response', function () {
    return Inertia::render('Vet/Response');
})->name('response');

Route::get('result', function () {
    return Inertia::render('Vet/Result');
})->name('result');


Route::get('vetting', function () {
    return Inertia::render('Vet/Vetting');
})->name('vetting');


require __DIR__.'/auth.php';
