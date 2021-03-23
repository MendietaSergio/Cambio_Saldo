-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_saldo
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coeficiente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mediosdepagos1` int NOT NULL,
  `mediosdepagos2` int NOT NULL,
  `coeficiente` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `id_nombre_idx` (`mediosdepagos1`),
  KEY `id_nombre2_idx` (`mediosdepagos2`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coeficiente`
--

LOCK TABLES `coeficiente` WRITE;
/*!40000 ALTER TABLE `coeficiente` DISABLE KEYS */;
INSERT INTO `coeficiente` VALUES (1,1,2,2),(2,1,3,2),(3,1,4,2),(4,2,1,2),(5,2,3,2),(6,2,4,2),(7,3,1,2),(8,3,2,2),(9,3,4,2),(10,4,1,2),(11,4,2,2),(12,4,3,2);
/*!40000 ALTER TABLE `coeficiente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mediosdepagos`
--

DROP TABLE IF EXISTS `mediosdepagos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mediosdepagos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `image` varchar(100) NOT NULL,
  `campoAdicional` varchar(100) NOT NULL,
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mediosdepagos`
--

LOCK TABLES `mediosdepagos` WRITE;
/*!40000 ALTER TABLE `mediosdepagos` DISABLE KEYS */;
INSERT INTO `mediosdepagos` VALUES (1,'Transferencia Bancaria en pesos','trans_pesos','Ingrese su numero de CBU/CVU o ALIAS'),(2,'Rapipago, Pagofacil o CobroExpress','PFacil_RPago_CExpress','-'),(3,'MercadoPago (tarjeta de Credito o Debito)','MPagoTarjetaCredito','-'),(4,'Mercadopago (Saldo en Cuenta)','MPagoSaldoCuenta','Ingrese su numero de CBU/CVU o Alias de MercadoPago'),(5,'Uala','uala','Ingrese su número de CBU/CVU o Alias de UALÁ'),(6,'Bitcoin','bitcoin','Ingrese su Wallet de Bitcoin'),(7,'DAI','DAI','Ingrese su wallet de DAI'),(8,'Tether','tether','Ingrese su Wallet de Tether'),(9,'Transferencia Bancaria en Euros','banco_eur','Ingrese su IBAN para Transferencia Bancaria Europa'),(10,'Uphold','uphold','Ingrese su correo electrónico de su cuenta UPHOLD'),(11,'Neteller','neteller','Ingrese su correo electronico de su cuenta Neteller'),(12,'Paypal','paypal','Ingrese su correo electrónico de su cuenta de Paypal'),(13,'Payeer','payeer','Ingrese su correo electrónico de su cuenta Payeer'),(14,'Perfect Money','perfectmoney','Ingrese su cuenta de Perfect Money'),(15,'Payoneer','payoneer','Ingrese su correo electrónico de su cuenta Payoneer'),(16,'Skrill','skrill','Ingrese su correo electrónico de su cuenta de Skrill');
/*!40000 ALTER TABLE `mediosdepagos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Administrador','Admin@saldo.com','123456');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
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

-- Dump completed on 2021-03-20 16:02:01
