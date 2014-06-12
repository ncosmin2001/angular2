<?php
namespace App\Models;
use Illuminate\Auth\UserTrait;
use Illuminate\Auth\Reminders\RemindableTrait;

class Technology extends \Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'technologies';
    protected $primaryKey = "technology_id";

}
