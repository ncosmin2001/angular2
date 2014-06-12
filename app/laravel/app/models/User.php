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
        //return $this->morphToMany('App\Models\User\Skill', 'user_skill', 'x_user_skill', 'user_id', 'user_id');
        return $this->hasMany('App\Models\User\Skill','user_id', 'user_id');
    }
    public function technologies()
    {
        return $this->hasMany('App\Models\User\Technology','user_id', 'user_id');
    }

    static function validate($input) {
        $messages = array(
            'user_name.required' => 'The username field is required.',
        );
        $rules = array(
            'user_name'     => 'Required|Between:5,15|Alpha',
            'user_password' => 'Required|Between:4,10'
        );

        return \Validator::make($input, $rules,$messages);
    }
}
