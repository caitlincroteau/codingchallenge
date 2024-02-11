
DROP TABLE IF EXISTS `cities`;

CREATE TABLE `cities` (
  `city_id` SERIAL NOT NULL,
  `city_name` VARCHAR(255) NOT NULL,
  `health_authority_name` INTEGER,
  PRIMARY KEY (`city_id`),
  FOREIGN KEY (`heath_authority_name`) REFERENCES `health_authorities`(`health_authority_name`)
  );