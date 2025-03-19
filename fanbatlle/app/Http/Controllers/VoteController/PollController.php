<?php

namespace App\Http\Controllers\VoteController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Vote;
use Inertia\Inertia;

class PollController extends Controller
{
    /**
     * Affiche la liste de tous les sondages.
     *
     * GET /votes
     */
    public function index()
    {
        $votes = Vote::all();
        // Assurez-vous que le composant DisplayPool se trouve bien à :
        // resources/js/pages/crudPoll/DisplayPool.tsx
        return Inertia::render('crudPoll/displayPoll/DisplayPool', [
            'votes' => $votes,
        ]);
    }

    /**
     * Affiche le formulaire de création d'un sondage.
     *
     * GET /votes/create
     */
    public function create()
    {
        // On modifie le chemin pour correspondre à la structure réelle :
        // resources/js/pages/crudPoll/createPoll/CreatePoll.tsx
        return Inertia::render('crudPoll/createPoll/CreatePoll');
    }

    /**
     * Enregistre un nouveau sondage.
     *
     * POST /votes
     */
    public function store(Request $request)
    {
        // Validation des données
        $data = $request->validate([
            'start_date'    => 'required|date',
            'end_date'      => 'required|date|after_or_equal:start_date',
            'poll_question' => 'required|string|max:255',
        ]);

        // return $data;

        //Création du sondage via Eloquent
        // Vote::create($data);
        $vote = Vote::create([
            'start_date' => $data['start_date'],
            'end_date' => $data['end_date'],
            'poll_question' => $data['poll_question'],
            ]);
   

            return redirect()->route('create')->with('success', 'User registered successfully');
     }

    /**
     * Affiche les détails d'un sondage spécifique.
     *
     * GET /votes/{id}
     */
    public function show($id)
    {
        $vote = Vote::find($id);
        if (!$vote) {
            return redirect()->route('votes.index')
                ->with('error', 'Sondage non trouvé');
        }
        // Assurez-vous que le composant DisplayPoolDetail est bien à :
        // resources/js/pages/crudPoll/DisplayPoolDetail.tsx
        return Inertia::render('crudPoll/DisplayPoolDetail', [
            'vote' => $vote,
        ]);
    }

    /**
     * Affiche le formulaire d'édition d'un sondage.
     *
     * GET /votes/{id}/edit
     */
    public function edit($id)
    {
        $vote = Vote::find($id);
        if (!$vote) {
            return redirect()->route('votes.index')
                ->with('error', 'Sondage non trouvé');
        }
        // Assurez-vous que le composant UpdatePool est bien à :
        // resources/js/pages/crudPoll/UpdatePool.tsx
        return Inertia::render('crudPoll/UpdatePool', [
            'vote' => $vote,
        ]);
    }

    /**
     * Met à jour un sondage existant.
     *
     * PUT/PATCH /votes/{id}
     */
    public function update(Request $request, $id)
    {
        $vote = Vote::find($id);
        if (!$vote) {
            return redirect()->route('votes.index')
                ->with('error', 'Sondage non trouvé');
        }

        // Validation partielle : on met à jour uniquement les champs envoyés
        $data = $request->validate([
            'start_date'    => 'sometimes|required|date',
            'end_date'      => 'sometimes|required|date|after_or_equal:start_date',
            'poll_question' => 'sometimes|required|string|max:255',
        ]);

        $vote->update($data);

        return redirect()->route('votes.index')
            ->with('success', 'Sondage mis à jour avec succès');
    }

    /**
     * Supprime un sondage.
     *
     * DELETE /votes/{id}
     */
    public function destroy($id)
    {
        $vote = Vote::find($id);
        if (!$vote) {
            return redirect()->route('votes.index')
                ->with('error', 'Sondage non trouvé');
        }

        $vote->delete();

        return redirect()->route('votes.index')
            ->with('success', 'Sondage supprimé avec succès');
    }
}
