
DROP TABLE IF EXISTS clients CASCADE;

CREATE TABLE clients (
  client_id SERIAL PRIMARY KEY NOT NULL,
  year_created DATE NOT NULL DEFAULT CURRENT_DATE,
  active BOOLEAN NOT NULL DEFAULT TRUE,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  gender VARCHAR(255) NOT NULL,
  dob DATE NOT NULL,
  indigenous BOOLEAN NOT NULL,
  pwd BOOLEAN NOT NULL,
  vet	BOOLEAN NOT NULL,
  emergency_sheltered BOOLEAN NOT NULL,
  bus_pass BOOLEAN NOT NULL,
  clothing_supplement BOOLEAN NOT NULL,
  pet_deposit BOOLEAN NOT NULL,
  pssg BOOLEAN NOT NULL,
  status VARCHAR(255),
  deceased BOOLEAN NOT NULL,
  city_id INTEGER REFERENCES cities(id)
);