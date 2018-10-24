<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJctUserLeaguesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jct_user_leagues', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('fk_user'); // id of the user
            $table->integer('fk_league');// id of the league
            $table->tinyInteger('fk_userRole'); // users role in league
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jct__user_leagues');
    }
}
