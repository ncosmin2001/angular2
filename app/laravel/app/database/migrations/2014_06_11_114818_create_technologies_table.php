<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTechnologiesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('technologies', function(Blueprint $table)
		{
            $table->increments('technology_id')->unsigned();
            $table->string('technology_name');
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
        Schema::drop('technologies');
        /*
		Schema::table('technologies', function(Blueprint $table)
		{
			//
		});
        */
	}

}
