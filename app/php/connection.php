<?php

$config = array(
		'host'        => 'localhost',
		'user'        => 'root',
		'pass'        => '',
		'database'    => 'angular_workshop',
		);
$db = new PDO(
		'mysql:host='.
		$config['host'].';dbname='.
		$config['database'].';charset=utf8', 
		$config['user'],
		$config['pass']
		);
