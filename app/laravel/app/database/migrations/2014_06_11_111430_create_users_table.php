<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function(Blueprint $table)
		{
            $table->increments('user_id')->unsigned();
            $table->string('user_first_name')->nullable();
            $table->string('user_last_name')->nullable();
            $table->integer('user_location')->nullable();
            $table->string('user_name');
            $table->string('user_password');
            // created_at, updated_at DATETIME
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
        Schema::drop('users');
        /*
		Schema::table('users', function(Blueprint $table)
		{
			//
		});
        */
	}

}
