-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_saldo
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coeficiente`
--

DROP TABLE IF EXISTS `coeficiente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coeficiente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mediosdepagos1` int(11) NOT NULL,
  `mediosdepagos2` int(11) NOT NULL,
  `coeficiente` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `id_nombre_idx` (`mediosdepagos1`),
  KEY `id_nombre2_idx` (`mediosdepagos2`),
  CONSTRAINT `id_nombre` FOREIGN KEY (`mediosdepagos1`) REFERENCES `mediosdepagos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_nombre2` FOREIGN KEY (`mediosdepagos2`) REFERENCES `mediosdepagos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coeficiente`
--

LOCK TABLES `coeficiente` WRITE;
/*!40000 ALTER TABLE `coeficiente` DISABLE KEYS */;
INSERT INTO `coeficiente` VALUES (1,1,2,3),(2,1,3,3),(3,1,4,3),(4,1,5,3),(5,1,6,3),(6,1,7,3),(7,1,8,3),(8,2,1,3),(9,2,3,3),(10,2,4,3),(11,2,5,3),(12,2,6,3),(13,2,7,3),(14,2,8,3),(15,3,1,3),(16,3,2,3),(17,3,4,3),(18,3,5,3),(19,3,6,3),(20,3,7,3),(21,3,8,3);
/*!40000 ALTER TABLE `coeficiente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mediosdepagos`
--

DROP TABLE IF EXISTS `mediosdepagos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mediosdepagos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mediosdepagos`
--

LOCK TABLES `mediosdepagos` WRITE;
/*!40000 ALTER TABLE `mediosdepagos` DISABLE KEYS */;
INSERT INTO `mediosdepagos` VALUES (1,'Pesos'),(2,'Cuenta Digital'),(3,'Rapipago'),(4,'Mercadopago'),(5,'Ualá'),(6,'Bitcoin'),(7,'Paypal'),(8,'Payeer');
/*!40000 ALTER TABLE `mediosdepagos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `rol` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'admin','admin@saldo.com','123456','admin');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'db_saldo'
--

--
-- Dumping routines for database 'db_saldo'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-03 13:12:06
