-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 07, 2014 at 10:25 AM
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
  `id_relation` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  PRIMARY KEY (`id_relation`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE IF NOT EXISTS `skills` (
  `skill_id` int(11) NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(50) NOT NULL,
  PRIMARY KEY (`skill_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`skill_id`, `skill_name`) VALUES
(1, 'php'),
(2, 'java');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_first_name`, `user_last_name`, `user_location`, `user_name`, `user_password`) VALUES
(1, '123213', 'fdgdgf', 122, 'Gffggd', '12345'),
(4, NULL, NULL, NULL, 'fffsdf', 'sdfsdfsdf'),
(5, NULL, NULL, NULL, 'fffsdfsdfs', 'sdfsdfsdf'),
(6, NULL, NULL, NULL, 'fadfdgfdgf', 'dfgfdgfsdg'),
(7, NULL, NULL, NULL, 'retetret', 'rwetwertwe'),
(8, NULL, NULL, NULL, 'sdfsdfsdf', 'sdfsdfsd'),
(9, NULL, NULL, NULL, 'gsdfgsfgfd', 'gfdgsdfgfd'),
(10, 'sdfsdfs', 'fsdfsdf', 0, 'sdfsdf', 'sdfsdf');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
