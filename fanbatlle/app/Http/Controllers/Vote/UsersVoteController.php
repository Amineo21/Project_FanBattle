<?php

namespace App\Http\Controllers\Vote;

use App\Http\Controllers\Controller;
use App\Models\Vote;
use App\Models\UserVote;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UsersVoteController extends Controller
{

    public function create($voteId)
    {
        $vote = Vote::find($voteId);

        if (!$vote) {
            return redirect('/about');
        }

        return Inertia::render('poll/vote', [
            'vote' => $vote, 
        ]);
    }

    public function store(Request $request, $voteId)
    {
        $request->validate([
            'answer' => 'required|in:1,2,3',
            'commentary' => 'nullable|string',
        ]);

        UserVote::create([
            'answer' => $request->input('answer'),
            'commentary' => $request->input('commentary'),
            'user_id' => auth()->id(),
            'vote_id' => $voteId,
        ]);

        return redirect()->route('about')->with('success', 'Votre vote a été enregistré avec succès');
    }
}



