<?php
namespace App\Models;
use Illuminate\Auth\UserTrait;
use Illuminate\Auth\Reminders\RemindableTrait;

class User extends \Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';
    protected $primaryKey = "user_id";
    public function skills()
    {
        return $this->hasMany('App\Models\User\Skill','user_id', 'user_id');
    }
}
