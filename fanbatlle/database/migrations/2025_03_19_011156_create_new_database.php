<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewDatabase extends Migration
{
    /**
     * Applique les modifications de la base de données.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->date('date_of_birth');
            $table->string('country');
            $table->boolean('is_admin');
        });

        Schema::create('votes', function (Blueprint $table) {
            $table->id();
            $table->date('start_date');
            $table->date('end_date');
            $table->string('poll_question');
            $table->timestamps();
        });

        Schema::create('users_vote', function (Blueprint $table) {
            $table->id();
            $table->integer('answer');
            $table->string('commentary');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('vote_id')->constrained('votes')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_vote');
        Schema::dropIfExists('votes');
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('date_of_birth');
            $table->dropColumn('country');
            $table->dropColumn('is_admin');
        });
    }
}