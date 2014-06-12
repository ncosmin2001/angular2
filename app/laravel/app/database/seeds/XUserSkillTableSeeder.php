<?php
use App\Models\User\Skill;

class XUserSkillTableSeeder extends Seeder {
    public function run()
    {
        DB::table('x_user_skill')->delete();

        Skill::create(array('skill_id'      => 1,
                'user_id' => 1,
                'skill_level'   => 2
            )
        );
        Skill::create(array('skill_id'      => 2,
                'user_id'       => 1,
                'skill_level'   => 3
            )
        );

    }
}