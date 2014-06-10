<?php
require_once "../connection.php";
require_once "../models/skill.php";
require_once "../models/skillRelation.php";
class skillsController
{
    public function __construct($_database)
    {
        $this->database = $_database;
    }

    public function getSkills(){

        $sql = "SELECT * FROM skills";
        $q = $this->database->prepare($sql);
        $q->execute();

        $result = $q->fetchAll(PDO::FETCH_CLASS, "skillModel");
        echo json_encode($result);


    }

    public function addSkill(){

        $sql = "INSERT INTO x_user_skill (user_id, skill_id, level) VALUES (:user_id,:skill_id,:level)
  ON DUPLICATE KEY UPDATE level=:level ";

        $st = $this->database->prepare($sql);

        $st->execute(array(':user_id' => $_REQUEST['user_id'],':skill_id' => $_REQUEST['skill_id'],':level'=>$_REQUEST['level']));



        echo json_encode(
            array(
                'id' => $this->database->lastInsertId()
                ,'user_id' => $_REQUEST['user_id']
                ,'skill_id' => $_REQUEST['skill_id']
                ,'level'=>$_REQUEST['level']
            )
        );

    }

    public function getUserSkills(){
        $userId = $_REQUEST['user_id'];
        $sql = "SELECT s.level, s.user_id,s.skill_id, sk.skill_name FROM x_user_skill s,skills sk where s.user_id = :user_id and sk.skill_id = s.skill_id ";
        $q = $this->database->prepare($sql);
        $q->execute(array(':user_id'=> $userId));

        $result = $q->fetchAll(PDO::FETCH_CLASS, "skillRelation");
        echo json_encode($result);
    }


}


$userC    = new skillsController($db);
$response = $userC->$_GET['action']();

echo $response;