<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLeaguesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leagues', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name'); // name of league
            $table->integer('fk_playerDB');  // player 'database' used
            $table->integer('fk_seasonID'); // 
            $table->boolean('salaryCap'); // use salary cap
            $table->bigInteger('upperCap'); // upper cap
            $table ->bigInteger('lowerCap'); // lower cap
            $table ->tinyInteger('tradeDeadline'); // number of games to impose trade deadline
            $table ->boolean('allowDevelopment'); // whether to allow player development

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
        Schema::dropIfExists('leagues');
    }
}
