<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateXUserSkillTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('x_user_skill', function(Blueprint $table)
		{
            $table->increments('user_skill_id');
            $table->integer('user_id')->unsigned();
            $table->integer('skill_id')->unsigned();
            $table->integer('skill_level');
            $table->foreign('user_id')->references('user_id')->on('users');
            $table->foreign('skill_id')->references('skill_id')->on('skills');
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
        Schema::drop('x_user_skill');
        /*
		Schema::table('x_user_skill', function(Blueprint $table)
		{
			//
		});
        */
	}

}
