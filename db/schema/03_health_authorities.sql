

DROP TABLE IF EXISTS health_authorities CASCADE;

CREATE TABLE health_authorities (
  heath_authority_id SERIAL PRIMARY KEY NOT NULL,
  health_authority_name VARCHAR(255) NOT NULL
);