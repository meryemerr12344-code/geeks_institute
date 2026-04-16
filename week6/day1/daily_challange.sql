-- Create Customer table
CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL
);

-- Create Customer Profile table
CREATE TABLE Customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INTEGER UNIQUE REFERENCES Customer(id) ON DELETE CASCADE
);

-- Insert customers
INSERT INTO Customer (first_name, last_name) VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- Insert customer profiles using subqueries
INSERT INTO Customer_profile (isLoggedIn, customer_id)
VALUES 
    (true, (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')),
    (false, (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));

-- Display: first_name of LoggedIn customers
SELECT c.first_name
FROM Customer c
INNER JOIN Customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;

-- Display: all customers first_name and isLoggedIn (including those without profile)
SELECT c.first_name, cp.isLoggedIn
FROM Customer c
LEFT JOIN Customer_profile cp ON c.id = cp.customer_id;

-- Display: number of customers that are not LoggedIn
SELECT COUNT(*) AS customers_not_logged_in
FROM Customer c
LEFT JOIN Customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = false OR cp.isLoggedIn IS NULL;
--2
-- Create Book table
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL
);

-- Insert books
INSERT INTO Book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

-- Create Student table with age constraint
CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age INTEGER CHECK (age <= 15)
);

-- Insert students
INSERT INTO Student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- Create Library junction table
CREATE TABLE Library (
    book_fk_id INTEGER REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_fk_id INTEGER REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id)
);

-- Add records to junction table using subqueries
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES 
    ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
     (SELECT student_id FROM Student WHERE name = 'John'), 
     '2022-02-15'),
    
    ((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), 
     (SELECT student_id FROM Student WHERE name = 'Bob'), 
     '2021-03-03'),
    
    ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
     (SELECT student_id FROM Student WHERE name = 'Lera'), 
     '2021-05-23'),
    
    ((SELECT book_id FROM Book WHERE title = 'Harry Potter'), 
     (SELECT student_id FROM Student WHERE name = 'Bob'), 
     '2021-08-12');

-- Display all columns from junction table
SELECT * FROM Library;

-- Display student name and book title of borrowed books
SELECT s.name, b.title, l.borrowed_date
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

-- Display average age of children who borrowed "Alice in Wonderland"
SELECT AVG(s.age) AS average_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- Test deletion: Delete a student from the Student table
DELETE FROM Student WHERE name = 'John';

