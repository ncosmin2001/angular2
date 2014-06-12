<?php
use App\Models\Skill;
class SkillsTableSeeder extends Seeder {
    public function run()
    {
        DB::table('skills')->delete();

        Skill::create(array('skill_id'   => 1,
                'skill_name' => 'PHP'
            )
        );
        Skill::create(array('skill_id'   => 2,
                'skill_name' => 'OOP'
            )
        );
    }
}