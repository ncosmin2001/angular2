<?php
use App\Models\User\Technology;

class XUserTechnologyTableSeeder extends Seeder {
    public function run()
    {
        DB::table('x_user_technology')->delete();

        Technology::create(array('user_id'         => 1,
                'technology_id'   => 1,
                'technology_level'=> 3
            )
        );
    }
}
