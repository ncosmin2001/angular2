<?php
namespace App\Models;
use Illuminate\Auth\UserTrait;
use Illuminate\Auth\Reminders\RemindableTrait;

class Skill extends \Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'skills';
    protected $primaryKey = "skill_id";
}
