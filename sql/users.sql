CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `userName` varchar(31) NOT NULL,
  `email` varchar(127) NOT NULL,
  `firstName` varchar(31) NOT NULL,
  `lastName` varchar(31) NOT NULL,
  `gender` enum('male','female') DEFAULT NULL,
  `country` varchar(127) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `bio` text,
  `onlineStatus` enum('online','offline') DEFAULT NULL,
  `age` int(3) unsigned NOT NULL,
  `lastLogin` timestamp NULL DEFAULT NULL,
  `languagesSpoken` varchar(31) NOT NULL,
  `languagesInterested` varchar(31) NOT NULL,
  `password` varchar(63) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=211 DEFAULT CHARSET=utf8