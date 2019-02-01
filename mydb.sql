-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 01, 2019 at 05:59 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `borehole`
--

CREATE TABLE `borehole` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `type` text NOT NULL,
  `latitude` text NOT NULL,
  `longitude` text NOT NULL,
  `elevation` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `borehole`
--

INSERT INTO `borehole` (`id`, `name`, `type`, `latitude`, `longitude`, `elevation`) VALUES
(94, 'Thembise', 'deep', '12', '15', 'mamali'),
(99, 'Thembise', 'deep', '12', '15', 'mamali'),
(100, 'mam', 'mkjwdnk', 'jhjsjhnj', 'jhdw', 'qwwq');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `name` text NOT NULL,
  `position` text NOT NULL,
  `office` text NOT NULL,
  `sallary` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `water`
--

CREATE TABLE `water` (
  `id` int(11) NOT NULL,
  `date` text NOT NULL,
  `readings` text NOT NULL,
  `id2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `water`
--

INSERT INTO `water` (`id`, `date`, `readings`, `id2`) VALUES
(0, '22-100-30', '400', 94),
(0, '22-100-30', '400', 94),
(0, '22-100-30', '400', 94),
(0, '22-100-30', '400', 94),
(0, '22-100-30', '400', 94),
(0, '22-100-30', '400', 94),
(0, '22-100-30', '400', 94);

-- --------------------------------------------------------

--
-- Table structure for table `waterlevel`
--

CREATE TABLE `waterlevel` (
  `id` int(11) NOT NULL,
  `date` text NOT NULL,
  `readings` int(11) NOT NULL,
  `id2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `waterlevel`
--

INSERT INTO `waterlevel` (`id`, `date`, `readings`, `id2`) VALUES
(13, '2020-11-07T22:00:00.000Z', 12345678, 94),
(15, '2019-02-09T22:00:00.000Z', 55555, 94);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `borehole`
--
ALTER TABLE `borehole`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `waterlevel`
--
ALTER TABLE `waterlevel`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `borehole`
--
ALTER TABLE `borehole`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `waterlevel`
--
ALTER TABLE `waterlevel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
