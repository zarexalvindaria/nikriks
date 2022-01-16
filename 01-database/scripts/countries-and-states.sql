USE `full-stack-petsupply`;

SET foreign_key_checks = 0;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;

CREATE TABLE `country` (
  `id` smallint unsigned NOT NULL,
  `code` varchar(2) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

--
-- Data for table `country`
--

INSERT INTO `country` VALUES 
(1,'PH','Philippines');

--
-- Table structure for table `region`
--

DROP TABLE IF EXISTS `region`;

CREATE TABLE `region` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `country_id` smallint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_country` (`country_id`),
  CONSTRAINT `fk_country` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1;

--
-- Dumping data for table `region`
--

INSERT INTO `region` VALUES 
(1,'National Capital Region (NCR)',1),
(2,'Cordillera Administrative Region (CAR)',1),
(3,'Region I (Ilocos Region)',1),
(4,'Region II (Cagayan Valley)',1),
(5,'Region III (Central Luzon)',1),
(6,'Region IV-A (CALABARZON)',1),
(7,'MIMAROPA Region',1),
(8,'Region V (Bicol Region)',1),
(9,'Region VI (Western Visayas)',1),
(10,'Region VII (Central Visayas)',1),
(11,'Region VIII (Eastern Visayas)',1),
(12,'Region IX (Zamboanga Peninsula)',1),
(13,'Region X (Northern Mindanao)',1),
(14,'Region XI (Davao Region)',1),
(15,'Region XII (SOCCSKSARGEN)',1),
(16,'Region XIII (CARAGA)',1),
(17,'Autonomous Region in Muslim Mindanao (ARMM)',1);

SET foreign_key_checks = 1;