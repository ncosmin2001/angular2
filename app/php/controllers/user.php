<?php
require_once "../connection.php";
require_once "../models/user.php";
class userController
{
	public function __construct($_database)
	{
		$this->database = $_database;
	}
	
	public function login()
	{
		$user = new userModel();
		$statement = $this->database->prepare("select * from users where user_name = :name");
		$statement->execute(array(':name' => $_REQUEST['user_name']));
		$row = $statement->fetch();
		if($row === FALSE)
		{
			$this->insert();
			$user->user_id       = $this->database->lastInsertId();
			$user->user_name     = $_REQUEST['user_name'];
			$user->user_password = $_REQUEST['user_password'];
		}
		else
		{
			$user->user_id = (int)$row['user_id'];
			$user->user_first_name = $row['user_first_name'];
			$user->user_last_name = $row['user_last_name'];
			$user->user_location = $row['user_location'];
			$user->user_name = $row['user_name'];
			$user->user_password = $row['user_password'];
		}
		return json_encode($user);
	}
	public function insert()
	{
		$sql = "INSERT INTO users (user_name,user_password) VALUES (:name,:password)";

		$q = $this->database->prepare($sql);

		$q->execute(array(':name'=>$_REQUEST['user_name'],':password'=>$_REQUEST['user_password']));

		
	}

    public function updateUser(){
        $req= $_REQUEST;
        unset($req['action']);
        try{
            $sql = "UPDATE users SET
            user_first_name = :user_first_name,
             user_last_name = :user_last_name,
             user_location= :user_location,
             user_name= :user_name,
             user_password = :user_password

              WHERE user_id=:user_id";
            $q = $this->database->prepare($sql);

            $x = array();

            foreach($req as $key => $val){
                $x[':'.$key]= $val;
            }
            $q->execute($x);
            echo json_encode(array('status'=>'ok'));
        }catch (PDOException $e){
            echo json_encode(array('status'=>'ko'));
        }

    }



}


$userC    = new userController($db);
$response = $userC->$_GET['action']();

echo $response;