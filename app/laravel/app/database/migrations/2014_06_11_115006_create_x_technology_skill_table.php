<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateXTechnologySkillTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('x_technology_skill', function(Blueprint $table)
		{
            $table->increments('technology_skill_id');
            $table->integer('skill_id')->unsigned();
            $table->integer('technology_id')->unsigned();
            $table->integer('skill_level');
            $table->foreign('skill_id')->references('skill_id')->on('skills');
            $table->foreign('technology_id')->references('technology_id')->on('technologies');
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
        Schema::drop('x_technology_skill');
        /*
		Schema::table('x_tehnology_skill', function(Blueprint $table)
		{
			//
		});
        */
	}

}
