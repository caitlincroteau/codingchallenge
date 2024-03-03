

DROP TABLE IF EXISTS notes CASCADE;

CREATE TABLE notes (
  note_id SERIAL PRIMARY KEY NOT NULL,
  note_date DATE NOT NULL DEFAULT CURRENT_DATE,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE
);