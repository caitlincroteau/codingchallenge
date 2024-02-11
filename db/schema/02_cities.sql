
DROP TABLE IF EXISTS cities CASCADE;

CREATE TABLE cities (
  city_id SERIAL PRIMARY KEY NOT NULL,
  city_name VARCHAR(255) NOT NULL,
  heath_authority_id INTEGER REFERNCES health_authorities(id)
);