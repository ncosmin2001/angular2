-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 07, 2014 at 11:30 AM
-- Server version: 5.5.24-log
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `angular_workshop`
--

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_first_name`, `user_last_name`, `user_location`, `user_name`, `user_password`) VALUES
(1, '123213', 'fdgdgf', 122, 'Gffggd', '12345'),
(4, 'f4', 'l4', 4, 'fffsdf', 'sdfsdfsdf'),
(5, '5', '5', 5, 'fffsdfsdfs', 'sdfsdfsdf'),
(6, '6', '6', 6, 'fadfdgfdgf', 'dfgfdgfsdg'),
(7, '7', '7', 7, 'retetret', 'rwetwertwe'),
(8, '8', '8', 8, 'sdfsdfsdf', 'sdfsdfsd'),
(9, '9', '9', 9, 'gsdfgsfgfd', 'gfdgsdfgfd'),
(10, 'sdfsdfs', 'fsdfsdf', 0, 'sdfsdf', 'sdfsdf'),
(11, '11', '11', 11, 'calin', 'calin');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
