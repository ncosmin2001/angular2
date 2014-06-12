<?php
use App\Models\Technology;

class TechnologiesTableSeeder extends Seeder {
    public function run()
    {
        DB::table('technologies')->delete();
        Technology::create(array('technology_id'   => 1,
                'technology_name' => 'Symfony'
            )
        );
    }
}