<?php

class SkillController extends BaseController {

    public function all()
    {
        $skills     = DB::table('skills')->get();
        return Response::json($skills);
    }



}