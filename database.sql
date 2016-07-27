-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 21, 2016 at 06:56 PM
-- Server version: 5.7.11
-- PHP Version: 5.6.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bamazon`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE database bamazon;
 USE bamazon;
 
 CREATE TABLE products (
	ItemID INT NOT NULL,
    ProductName VARCHAR(45) NULL,
    DepartmentName VARCHAR(45) NULL,
    Price DECIMAL(15, 2),
    StockQuantity INT(15),
    PRIMARY KEY (ItemID)
 );

INSERT INTO `products` (`ItemID`, `ProductName`, `DepartmentName`, `Price`, `StockQuantity`) 
VALUES ('0001', 'apples', 'produce', 0.50, 45);
INSERT INTO `products` (`ItemID`, `ProductName`, `DepartmentName`, `Price`, `StockQuantity`) 
VALUES ('0002', 'oranges', 'produce', 0.55, 69);
INSERT INTO `products` (`ItemID`, `ProductName`, `DepartmentName`, `Price`, `StockQuantity`) 
VALUES ('0003', 'bananas', 'produce', 0.75, 202);
INSERT INTO `products` (`ItemID`, `ProductName`, `DepartmentName`, `Price`, `StockQuantity`) 
VALUES ('0004', 'Cookie-Dough-ice-cream', 'frozen', 4.75, 15);
INSERT INTO `products` (`ItemID`, `ProductName`, `DepartmentName`, `Price`, `StockQuantity`) 
VALUES ('0005', 'water-bottles', 'soft-drinks', 4.89, 58);
INSERT INTO `products` (`ItemID`, `ProductName`, `DepartmentName`, `Price`, `StockQuantity`) 
VALUES ('0006', 'coca-cola', 'soft-drinks', 1.75, 155);
INSERT INTO `products` (`ItemID`, `ProductName`, `DepartmentName`, `Price`, `StockQuantity`) 
VALUES ('0007', 'doz-eggs', 'dairy', 2.75, 41);
INSERT INTO `products` (`ItemID`, `ProductName`, `DepartmentName`, `Price`, `StockQuantity`) 
VALUES ('0008', 'entrepreneur', 'magazines', 4.85, 20);
INSERT INTO `products` (`ItemID`, `ProductName`, `DepartmentName`, `Price`, `StockQuantity`) 
VALUES ('0009', 'toothpaste', 'beauty', 1.89, 32);
INSERT INTO `products` (`ItemID`, `ProductName`, `DepartmentName`, `Price`, `StockQuantity`) 
VALUES ('0010', 'diet-pepsi', 'soft-drinks', 1.72, 130);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;