CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  bio TEXT,
  birthdate DATE NOT NULL
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  published_date DATE NOT NULL,
  author_id INTEGER NOT NULL REFERENCES authors(id) ON DELETE CASCADE
);
