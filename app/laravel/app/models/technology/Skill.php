<?php
namespace App\Models\Technology;
use Illuminate\Auth\UserTrait;
use Illuminate\Auth\Reminders\RemindableTrait;

class Skill extends \Eloquent {

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'x_technology_skill';
    public function skill()
    {
        return $this->hasOne('App\Models\Skill','skill_id','skill_id');
    }
}
