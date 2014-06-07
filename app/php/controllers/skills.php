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
        $userId = $_REQUEST['user_id'];
        $skillId = $_REQUEST['skill_id'];

        $sql = "INSERT INTO skillrelation (user_id,skill_id) VALUES (:user_id,:skill_id)";
        $st = $this->database->prepare($sql);
        $st->execute(array(':user_id' => $_REQUEST['user_id'],':skill_id' => $_REQUEST['skill_id']));

        echo json_encode(
            array(
                'id' => $this->database->lastInsertId()
                ,'user_id' => $_REQUEST['user_id']
                ,'skill_id' => $_REQUEST['skill_id']
            )
        );

    }


}


$userC    = new skillsController($db);
$response = $userC->$_GET['action']();

echo $response;