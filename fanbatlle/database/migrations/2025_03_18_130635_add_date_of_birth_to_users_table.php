<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDateOfBirthToUsersTable extends Migration
{
    /**
     * Applique les modifications de la base de données.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->date('date_of_birth')->nullable();  // Ajoute une colonne de type DATE
        });

         
        Schema::create('users_vote', function (Blueprint $table) {
            $table->id();
            $table->int('answer');
            $table->string('commentary');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('vote_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('vote', function (Blueprint $table) {
            $table->id();
            $table->date('start_date');
            $table->date('end_date');
            $table->string('poll_question');
        });
    }

    /**
     * Annule les modifications de la base de données.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('date_of_birth');  // Supprime la colonne si la migration est annulée
        });
    }
}