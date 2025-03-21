<?php
use App\Http\Controllers\VoteController\PollController;
use App\Http\Controllers\Vote\UsersVoteController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/poll/vote/{voteId}', [UsersVoteController::class, 'create'])->name('poll.vote');
Route::post('/poll/vote/{voteId}', [UsersVoteController::class, 'store']);

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/udash', function () {
    return Inertia::render('udash');
})->name('udash');

Route::get('CreatePoll', [PollController::class, 'create'])->name('create');
Route::post('CreatePoll', [PollController::class, 'store']);

//Route::get('DisplayPoll', [PollController::class, 'index'])->name('display');
// Lister les sondages
Route::get('polls', [PollController::class, 'index'])->name('polls.index');
Route::get('polls/{id}', [PollController::class, 'show'])->name('polls.show');
// Supprimer un sondage
Route::delete('polls/{id}', [PollController::class, 'destroy'])->name('polls.destroy');
// Lister les sondages
Route::get('polls', [PollController::class, 'index'])->name('polls.index');
// Éditer un sondage
Route::get('polls/{id}/edit', [PollController::class, 'edit'])->name('polls.edit');
Route::match(['put', 'patch'], 'polls/{id}', [PollController::class, 'update'])->name('polls.update');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
