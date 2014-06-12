<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
        Eloquent::unguard();

		$this->call('UsersTableSeeder');
        $this->call('SkillsTableSeeder');
        $this->call('TechnologiesTableSeeder');
        $this->call('XTechnologySkillTableSeeder');
        $this->call('XUserSkillTableSeeder');
        $this->call('XUserTechnologyTableSeeder');
	}
}

