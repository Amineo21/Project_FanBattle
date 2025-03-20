<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserVote extends Model
{
    use HasFactory;

    protected $fillable = ['answer', 'commentary', 'user_id', 'vote_id'];

    /**
     * Définit la relation avec le modèle Vote.
     */
    public function vote()
    {
        return $this->belongsTo(Vote::class);
    }

    /**
     * Définit la relation avec le modèle User.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
