<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('hello');
});
Route::get('user/skills/{id}', 'UserController@getSkills');
Route::get('skill/all', 'SkillController@all');
Route::get('user/all', 'UserController@all');
Route::post('user/auth', 'UserController@auth');
Route::post('user/update', 'UserController@update');
Route::post('user/skill/add', 'UserController@addSkill');