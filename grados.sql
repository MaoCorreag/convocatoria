/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 10.4.11-MariaDB : Database - grados
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`grados` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `grados`;

/*Table structure for table `anexos` */

DROP TABLE IF EXISTS `anexos`;

CREATE TABLE `anexos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `solicitud` varchar(2) DEFAULT NULL,
  `copia` varchar(2) DEFAULT NULL,
  `icfes` varchar(2) DEFAULT NULL,
  `carnet` varchar(2) DEFAULT NULL,
  `foto` varchar(2) DEFAULT NULL,
  `modalidad` varchar(2) DEFAULT NULL,
  `encuenta` varchar(2) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `direccion` varchar(20) DEFAULT NULL,
  `ciudad` varchar(20) DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  `celular` int(11) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `anexos` */

insert  into `anexos`(`id`,`solicitud`,`copia`,`icfes`,`carnet`,`foto`,`modalidad`,`encuenta`,`fecha`,`direccion`,`ciudad`,`telefono`,`celular`,`correo`) values 
(1,'on','on','on','on','on','on','on','2020-12-04','Calle 55# 17a - 47','Neiva',8761741,2147483647,'lol@lol.com');

/*Table structure for table `basica` */

DROP TABLE IF EXISTS `basica`;

CREATE TABLE `basica` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(100) NOT NULL,
  `cc` varchar(2) NOT NULL,
  `ci` varchar(2) NOT NULL,
  `no` int(20) NOT NULL,
  `lugarx` varchar(30) NOT NULL,
  `codigo` varchar(30) NOT NULL,
  `tecnico` varchar(2) NOT NULL,
  `tecnologo` varchar(2) NOT NULL,
  `profesional` varchar(2) NOT NULL,
  `periodoa` varchar(2) NOT NULL,
  `periodob` varchar(2) NOT NULL,
  `añoa` int(4) NOT NULL,
  `añob` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

/*Data for the table `basica` */

insert  into `basica`(`id`,`nombres`,`cc`,`ci`,`no`,`lugarx`,`codigo`,`tecnico`,`tecnologo`,`profesional`,`periodoa`,`periodob`,`añoa`,`añob`) values 
(1,'mao correa','0','0',1075213058,'neiva','sof320192002','0','0','0','0','0',0,20),
(2,'camilo sanchez','0','0',1075213058,'neiva','sof220193521','0','0','0','0','0',0,19),
(3,'ramiro ramirez','on','0',1075456987,'neiva','sof220193599','0','0','0','0','0',0,20),
(4,'daniela trujillo','','on',1075987456,'pitalito','sof320202121','','on','','','on',0,20),
(5,'danna chavez','on','',1075123654,'garzon','sof22019564','on','','','','on',0,21);

/*Table structure for table `modalidad` */

DROP TABLE IF EXISTS `modalidad`;

CREATE TABLE `modalidad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `monografia` varchar(2) NOT NULL,
  `tesis` varchar(2) NOT NULL,
  `seminario` varchar(2) NOT NULL,
  `desarrollo` varchar(2) NOT NULL,
  `plan` varchar(2) NOT NULL,
  `practica` varchar(2) NOT NULL,
  `tgrado` varchar(100) NOT NULL,
  `director` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `modalidad` */

insert  into `modalidad`(`id`,`monografia`,`tesis`,`seminario`,`desarrollo`,`plan`,`practica`,`tgrado`,`director`) values 
(1,'on','on','on','on','on','on','ciberseguridad','luis angel');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
