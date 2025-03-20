<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\PageController;

Route::get('/', [PageController::class, 'index']);


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/dashboardadmin', function () {
    return Inertia::render('dashboard_admin');
})->name('dashboardadmin');

Route::get('/dashboardapp', function () {
    return Inertia::render('dashboard_app');
})->name('dashboardapp');




// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';
