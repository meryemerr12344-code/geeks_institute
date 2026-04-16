
-- 1. Fetch the last 2 customers in alphabetical order (A-Z) – exclude 'id'
SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC, last_name ASC
OFFSET (SELECT COUNT(*) - 2 FROM customers)
LIMIT 2;


-- 2. Delete all purchases made by Scott
DELETE FROM purchases
WHERE customer_id = (SELECT id FROM customers WHERE first_name = 'Scott');


-- 3. Does Scott still exist in the customers table?
SELECT * FROM customers WHERE first_name = 'Scott';
-- Expected result: Yes, Scott still exists


-- 4. Find all purchases with LEFT JOIN - Scott's order appears but names are blank
SELECT 
    p.id AS purchase_id,
    p.item,
    p.amount,
    CASE 
        WHEN c.first_name = 'Scott' THEN ''
        ELSE c.first_name
    END AS first_name,
    CASE 
        WHEN c.first_name = 'Scott' THEN ''
        ELSE c.last_name
    END AS last_name
FROM purchases p
LEFT JOIN customers c ON p.customer_id = c.id;


-- 5. Find all purchases with INNER JOIN - Scott's order does NOT appear
-- (Scott's purchases were deleted in step 2, so they won't appear anyway)
-- But the correct join type to exclude a specific customer's orders is:
SELECT 
    p.id AS purchase_id,
    p.item,
    p.amount,
    c.first_name,
    c.last_name
FROM purchases p
INNER JOIN customers c ON p.customer_id = c.id
WHERE c.first_name != 'Scott';

-- Setup: Create tables (if they don't exist)
CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS purchases (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(id),
    item VARCHAR(100),
    amount DECIMAL(10, 2)
);

-- Insert sample data
INSERT INTO customers (first_name, last_name) VALUES
('Alice', 'Smith'),
('Bob', 'Johnson'),
('Scott', 'Brown'),
('David', 'Lee'),
('Emma', 'Wilson');

INSERT INTO purchases (customer_id, item, amount) VALUES
(1, 'Laptop', 999.99),
(2, 'Mouse', 25.50),
(3, 'Keyboard', 75.00),  -- Scott's purchase
(4, 'Monitor', 299.99),
(5, 'USB Cable', 12.99);