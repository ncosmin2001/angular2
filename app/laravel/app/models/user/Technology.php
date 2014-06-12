<?php
namespace App\Models\User;
use Illuminate\Auth\UserTrait;
use Illuminate\Auth\Reminders\RemindableTrait;
class Technology extends \Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'x_user_technology';
    protected $primaryKey = "user_technology_id";
    public function technology()
    {
        return $this->hasOne('App\Models\Technology','technology_id','technology_id');
    }
}
