<?php
use App\Models\Technology\Skill;

class XTechnologySkillTableSeeder extends Seeder {
    public function run()
    {
        DB::table('x_technology_skill')->delete();
        Skill::create(array('skill_id'      => 1,
                'technology_id' => 1,
                'skill_level'   => 80
            )
        );
        Skill::create(array('skill_id'      => 2,
                'technology_id' => 1,
                'skill_level'   => 30
            )
        );

    }
}