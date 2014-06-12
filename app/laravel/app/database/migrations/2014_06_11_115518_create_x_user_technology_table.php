<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateXUserTechnologyTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('x_user_technology', function(Blueprint $table)
		{
            $table->integer('user_technology_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('user_id')->on('users');
            $table->integer('technology_id')->unsigned();
            $table->foreign('technology_id')->references('technology_id')->on('technologies');
            $table->integer('technology_level');
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
        Schema::drop('x_user_technology');
        /*
		Schema::table('x_user_tehnology', function(Blueprint $table)
		{
			//
		});
        */
	}

}
