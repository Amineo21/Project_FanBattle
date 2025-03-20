<?php

namespace App\Http\Controllers\Vote;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UsersVote extends Controller
{
    /**
     * Enregistre le vote de l'utilisateur connecté pour un sondage donné.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $voteId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request, $voteId)
    {
        // Validation : la réponse doit être 1 (Pour), 2 (Neutre) ou 3 (Contre)
        $request->validate([
            'answer'     => 'required|in:1,2,3',
            'commentary' => 'nullable|string',
        ]);

        // Vérification que l'utilisateur est connecté
        $user = auth()->user();
        if (!$user) {
            return redirect()->back()->with('error', 'Vous devez être connecté pour voter.');
        }

        // Vérifier que le sondage existe dans la table 'votes'
        $vote = DB::table('votes')->where('id', $voteId)->first();
        if (!$vote) {
            return redirect()->back()->with('error', 'Le sondage spécifié n\'existe pas.');
        }

        // Vérifier si l'utilisateur a déjà voté pour ce sondage
        $existingVote = DB::table('users_vote')
            ->where('vote_id', $voteId)
            ->where('user_id', $user->id)
            ->first();
        if ($existingVote) {
            return redirect()->back()->with('error', 'Vous avez déjà voté pour ce sondage.');
        }

        // Insérer le vote dans la table 'users_vote'
        DB::table('users_vote')->insert([
            'answer'     => $request->input('answer'),
            'commentary' => $request->input('commentary'),
            'user_id'    => $user->id,
            'vote_id'    => $voteId,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return redirect()->back()->with('success', 'Votre vote a été enregistré avec succès !');
    }
}
