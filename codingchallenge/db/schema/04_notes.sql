

DROP TABLE IF EXISTS `notes`;

CREATE TABLE `notes` (
  `note_id` SERIAL PRIMARY KEY NOT NULL,
  `note_date` DATE NOT NULL DEFAULT CURRENT_DATE,
  `client_id` INTEGER,
  FOREIGN KEY (`client_id`) REFERENCES `clients`(`client_id`)
);