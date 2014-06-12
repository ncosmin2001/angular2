<?php

class UserController extends BaseController {

    /**
     * Show the profile for the given user.
     */
    public function showProfile($id)
    {
        $user = User::find($id);

        return View::make('user.profile', array('user' => $user));
    }
    public function auth()
    {
        $userName = Input::get('user_name');
        $user     = DB::table('users')->where('user_name',$userName)->first();
        //var_dump($user);
        if(is_null($user))
        {
            $user = new User;
            $user->user_name     = $userName;
            $user->user_password = Input::get('user_password');
            $user->save();
        }
        return Response::json($user);
    }
    public function update()
    {
        DB::table('users')
            ->where('user_id', Input::get('user_id'))
            ->update(array('user_first_name' => Input::get('user_first_name'),
                           'user_last_name'  => Input::get('user_last_name'),
                           'user_location'   => Input::get('user_location'),
                           'user_location'   => Input::get('user_location'),
                           'user_name'       => Input::get('user_name'),
                           'user_password'   => Input::get('user_password')));

        return Response::json(array('status'=>'ok'));
    }
    public function addSkill()
    {
        $userSkills = App\Models\User\Skill::
                        where('user_id', '=', Input::get('user_id'))
                      ->where('skill_id', '=', Input::get('skill_id'))
                      ->with('skill')->first();
        if(!$userSkills)
        {
            $userSkills = new App\Models\User\Skill;
            $userSkills->skill_id = Input::get('skill_id');
            $userSkills->user_id = Input::get('user_id');
        }
        $userSkills->skill_level = Input::get('skill_level');
        $userSkills->save();
        return Response::json($userSkills);
    }
    public function getSkills($id)
    {
        $user     = App\Models\User::where('user_id', '=', $id)->with('skills.skill')->first();
        //$user     = App\Models\User::with('skills.skill')->get();
        //$skills     = DB::table('x_user_skill')->where('user_id', '=', $id)->get();
        //$queries = DB::getQueryLog();
        //var_dump($queries);die();

        return Response::json($user->skills);
    }
    public function all()
    {
        $users   = App\Models\User::all();
        $users->load('skills.skill');
        $users->load('technologies.technology.skills.skill');
        //$users->load('technologies.technology');
        return Response::json($users);
    }
}