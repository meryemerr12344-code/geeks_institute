
--exercise 1:
-- 1. All items, ordered by price (lowest to highest)
SELECT *
FROM items
ORDER BY price ASC;

-- 2. Items with a price above 80 (80 included), ordered by price (highest to lowest)
SELECT *
FROM items
WHERE price >= 80
ORDER BY price DESC;

-- 3. The first 3 customers in alphabetical order of the first name (A-Z) – exclude primary key
SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
LIMIT 3;

-- 4. All last names, in reverse alphabetical order (Z-A)
SELECT last_name
FROM customers
ORDER BY last_name DESC;

--exercise 2:
-- 1. Select all columns from the customer table
SELECT *
FROM customer;

-- 2. Display names (first_name, last_name) using alias "full_name"
SELECT 
    CONCAT(first_name, ' ', last_name) AS full_name
FROM customer;

-- Or using concatenation operator:
SELECT 
    first_name || ' ' || last_name AS full_name
FROM customer;

-- 3. Get all create_date from customer table (no duplicates)
SELECT DISTINCT create_date
FROM customer
ORDER BY create_date;

-- 4. Get all customer details in descending order by first name
SELECT *
FROM customer
ORDER BY first_name DESC;

-- 5. Get film ID, title, description, release year and rental rate in ascending order by rental rate
SELECT 
    film_id,
    title,
    description,
    release_year,
    rental_rate
FROM film
ORDER BY rental_rate ASC;

-- 6. Get address and phone number of customers living in Texas district
SELECT 
    address,
    phone
FROM address
WHERE district = 'Texas';

-- 7. Retrieve all movie details where movie id is either 15 or 150
SELECT *
FROM film
WHERE film_id IN (15, 150);

-- 8. Check if your favorite movie exists (replace 'Your Movie Title' with actual title)
SELECT 
    film_id,
    title,
    description,
    length,
    rental_rate
FROM film
WHERE title = 'Your Movie Title';

-- 9. Get movies starting with the first two letters of your favorite movie (replace 'Yo' with your letters)
SELECT 
    film_id,
    title,
    description,
    length,
    rental_rate
FROM film
WHERE title LIKE 'Yo%';

-- 10. Find the 10 cheapest movies
SELECT *
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

-- 11. Find the next 10 cheapest movies (without LIMIT, using OFFSET)
SELECT *
FROM film
ORDER BY rental_rate ASC
LIMIT 10 OFFSET 10;

-- Bonus: Without LIMIT (using ROW_NUMBER)
SELECT *
FROM (
    SELECT *,
           ROW_NUMBER() OVER (ORDER BY rental_rate ASC) as row_num
    FROM film
) AS ranked
WHERE row_num BETWEEN 11 AND 20;

-- 12. Join customer and payment tables
SELECT 
    c.first_name,
    c.last_name,
    p.amount,
    p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id;

-- 13. Get all movies which are not in inventory
SELECT f.*
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
WHERE i.inventory_id IS NULL;

-- Alternative using NOT EXISTS
SELECT *
FROM film f
WHERE NOT EXISTS (
    SELECT 1 
    FROM inventory i 
    WHERE i.film_id = f.film_id
);

-- 14. Find which city is in which country
SELECT 
    c.city,
    co.country
FROM city c
JOIN country co ON c.country_id = co.country_id
ORDER BY co.country, c.city;

-- 15. BONUS: Get customer's id, names, amount, payment date ordered by staff id
SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    p.amount,
    p.payment_date,
    p.staff_id
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY p.staff_id, p.payment_date;