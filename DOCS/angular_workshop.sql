-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 07, 2014 at 02:17 PM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `angular_workshop`
--
CREATE DATABASE IF NOT EXISTS `angular_workshop` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `angular_workshop`;

-- --------------------------------------------------------

--
-- Table structure for table `skillrelation`
--

CREATE TABLE IF NOT EXISTS `skillrelation` (
  `user_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`skill_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `skillrelation`
--

INSERT INTO `skillrelation` (`user_id`, `skill_id`, `level`) VALUES
(17, 1, 4),
(17, 2, 4),
(17, 4, 1),
(17, 5, 4),
(18, 1, 1),
(18, 2, 3),
(18, 4, 2),
(18, 5, 2),
(19, 5, 3),
(19, 8, 5),
(20, 5, 5),
(20, 8, 4);

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE IF NOT EXISTS `skills` (
  `skill_id` int(11) NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(50) NOT NULL,
  PRIMARY KEY (`skill_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`skill_id`, `skill_name`) VALUES
(1, 'php'),
(2, 'java'),
(3, 'mysql'),
(4, 'javascript'),
(5, 'angularJs'),
(6, 'oracle'),
(7, 'C#'),
(8, 'navigare pe facebook');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_first_name` varchar(30) DEFAULT NULL,
  `user_last_name` varchar(30) DEFAULT NULL,
  `user_location` int(11) DEFAULT NULL,
  `user_name` varchar(10) NOT NULL,
  `user_password` varchar(10) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_first_name`, `user_last_name`, `user_location`, `user_name`, `user_password`) VALUES
(14, NULL, NULL, NULL, 'fff', '123'),
(15, NULL, NULL, NULL, 'fsadfsadfa', 'sadfsadfsa'),
(16, NULL, NULL, NULL, 'fsdfsd', 'fsdfsdfsd'),
(17, NULL, NULL, NULL, 'fdfsd', 'sdfsdf'),
(18, 'maria', 'radu', 0, 'marian', '123456'),
(19, NULL, NULL, NULL, 'andrei', '1234'),
(20, NULL, NULL, NULL, 'test5', '1234');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
