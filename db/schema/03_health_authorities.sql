

DROP TABLE IF EXISTS health_authorities CASCADE;

CREATE TABLE health_authorities (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);