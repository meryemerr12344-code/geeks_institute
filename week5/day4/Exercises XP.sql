-- Active: 1776337587435@@localhost@5432@my_app
CREATE DATABASE my_app;
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price INTEGER
);
CREATE TABLE actors (
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INT,
    number_oscars INT
);
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

INSERT INTO items (name, price) VALUES
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);

INSERT INTO customers (first_name, last_name) VALUES
('John', 'Doe'),
('Jane', 'Smith'),
('Emily', 'Johnson');

SELECT * FROM items;
SELECT * FROM items WHERE price > 80;
SELECT * FROM items WHERE price <= 300;

SELECT * FROM customers WHERE last_name = 'Smith';
SELECT * FROM customers WHERE last_name = 'Johnson';

SELECT * FROM customers WHERE first_name <> 'John';