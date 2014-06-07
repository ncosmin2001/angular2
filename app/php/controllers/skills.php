<?php
require_once "../connection.php";
require_once "../models/skill.php";
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


}


$userC    = new skillsController($db);
$response = $userC->$_GET['action']();

echo $response;