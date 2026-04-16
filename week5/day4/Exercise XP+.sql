-- Active: 1776341399480@@127.0.0.1@5432@bootcamp
-- Create database
CREATE DATABASE bootcamp;

-- Create table students
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birth_date DATE NOT NULL
);

-- Insert all 6 students (most efficient way - single INSERT)
INSERT INTO students (first_name, last_name, birth_date) VALUES
    ('Marc', 'Benichou', '1998-11-02'),
    ('Yoan', 'Cohen', '2010-12-03'),
    ('Lea', 'Benichou', '1987-07-27'),
    ('Amelia', 'Dux', '1996-04-07'),
    ('David', 'Grez', '2003-06-14'),
    ('Omer', 'Simpson', '1980-10-03');

-- Insert yourself 
INSERT INTO students (first_name, last_name, birth_date) 
VALUES ('mery ', 'err', '2001-03-11');
-- Fetch all data
SELECT * FROM students;

-- Fetch all first_names and last_names
SELECT first_name, last_name FROM students;

-- Fetch student with id = 2
SELECT first_name, last_name FROM students WHERE id = 2;

-- Fetch student: last_name = Benichou AND first_name = Marc
SELECT first_name, last_name FROM students 
WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- Fetch students: last_name = Benichou OR first_name = Marc
SELECT first_name, last_name FROM students 
WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- Fetch students whose first_names contain letter 'a'
SELECT first_name, last_name FROM students 
WHERE first_name ILIKE '%a%';

-- Fetch students whose first_names start with 'a'
SELECT first_name, last_name FROM students 
WHERE first_name ILIKE 'a%';

-- Fetch students whose first_names end with 'a'
SELECT first_name, last_name FROM students 
WHERE first_name ILIKE '%a';

-- Fetch students whose second to last letter of first_name is 'a' (ex: Leah -> 'ah' -> second to last = 'a')
SELECT first_name, last_name FROM students 
WHERE first_name LIKE '%a_';

-- Fetch students with id = 1 AND id = 3
SELECT first_name, last_name FROM students 
WHERE id IN (1, 3);

-- Fetch students whose birth_date >= 01/01/2000 (show all info)
SELECT * FROM students 
WHERE birth_date >= '2000-01-01';