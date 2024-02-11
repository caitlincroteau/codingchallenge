
DROP TABLE IF EXISTS cities;

CREATE TABLE cities (
  city_id SERIAL NOT NULL,
  city_name VARCHAR(255) NOT NULL,
  health_authrity_id INTEGER,
  PRIMARY KEY (city_id),
  FOREIGN KEY (heath_authority_id) REFERNCES health_authorities(heath_authority_id)
  );