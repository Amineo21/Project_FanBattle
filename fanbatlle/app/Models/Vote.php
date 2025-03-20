<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    use HasFactory;

    protected $fillable = ['start_date', 'end_date', 'poll_question'];

    /**
     * Récupère les réponses associées à ce vote.
     */
    public function userVotes()
    {
        return $this->hasMany(UserVote::class);
    }
}
