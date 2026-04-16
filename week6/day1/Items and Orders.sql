-- Create users table (for bonus)
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create product_orders table
CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,  -- For bonus
    status VARCHAR(20) DEFAULT 'pending'  -- pending, completed, cancelled
);

-- Create items table (one-to-many with product_orders)
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES product_orders(order_id) ON DELETE CASCADE,
    product_name VARCHAR(100) NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    -- Optional: store the price at time of order to preserve history
    -- even if product prices change later
    total_line_price DECIMAL(10, 2) GENERATED ALWAYS AS (quantity * price) STORED
);

-- Insert sample data for testing

-- Insert some users
INSERT INTO users (username, email) VALUES
('john_doe', 'john@example.com'),
('jane_smith', 'jane@example.com'),
('bob_wilson', 'bob@example.com');

-- Insert orders
INSERT INTO product_orders (user_id, status) VALUES
(1, 'completed'),
(1, 'pending'),
(2, 'completed'),
(3, 'pending');

-- Insert items for order 1
INSERT INTO items (order_id, product_name, quantity, price) VALUES
(1, 'Laptop', 1, 999.99),
(1, 'Mouse', 2, 25.50),
(1, 'Keyboard', 1, 75.00);

-- Insert items for order 2
INSERT INTO items (order_id, product_name, quantity, price) VALUES
(2, 'USB Cable', 3, 12.99),
(2, 'Headphones', 1, 49.99);

-- Insert items for order 3
INSERT INTO items (order_id, product_name, quantity, price) VALUES
(3, 'Book', 2, 15.99),
(3, 'Pen Set', 1, 8.50);

-- Function 1: Returns total price for a given order
CREATE OR REPLACE FUNCTION get_order_total(p_order_id INTEGER)
RETURNS DECIMAL(10, 2)
LANGUAGE plpgsql
AS $$
DECLARE
    total DECIMAL(10, 2);
BEGIN
    SELECT COALESCE(SUM(quantity * price), 0)
    INTO total
    FROM items
    WHERE order_id = p_order_id;
    
    RETURN total;
END;
$$;

-- Bonus Function: Returns total price for a given order of a given user
CREATE OR REPLACE FUNCTION get_user_order_total(p_user_id INTEGER, p_order_id INTEGER)
RETURNS DECIMAL(10, 2)
LANGUAGE plpgsql
AS $$
DECLARE
    total DECIMAL(10, 2);
    order_belongs_to_user BOOLEAN;
BEGIN
    -- Check if the order belongs to the user
    SELECT EXISTS (
        SELECT 1 
        FROM product_orders 
        WHERE order_id = p_order_id AND user_id = p_user_id
    ) INTO order_belongs_to_user;
    
    IF NOT order_belongs_to_user THEN
        RAISE EXCEPTION 'Order % does not belong to user %', p_order_id, p_user_id;
    END IF;
    
    -- Calculate the total
    SELECT COALESCE(SUM(quantity * price), 0)
    INTO total
    FROM items
    WHERE order_id = p_order_id;
    
    RETURN total;
END;
$$;

-- Alternative bonus function using JOIN (more efficient for multiple orders)
CREATE OR REPLACE FUNCTION get_user_all_orders_total(p_user_id INTEGER)
RETURNS TABLE(order_id INTEGER, total_amount DECIMAL(10, 2))
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        po.order_id,
        COALESCE(SUM(i.quantity * i.price), 0)::DECIMAL(10, 2) AS total_amount
    FROM product_orders po
    LEFT JOIN items i ON po.order_id = i.order_id
    WHERE po.user_id = p_user_id
    GROUP BY po.order_id
    ORDER BY po.order_id;
END;
$$;

-- Test the functions

-- Test function 1: Get total for order 1
SELECT get_order_total(1) AS order_1_total;
-- Expected: 999.99 + (2 * 25.50) + 75.00 = 1125.99

-- Test bonus function: Get total for specific order of specific user
SELECT get_user_order_total(1, 1) AS user1_order1_total;
-- Expected: 1125.99

-- Test bonus function: Get all orders total for user 1
SELECT * FROM get_user_all_orders_total(1);

-- Test error case (order doesn't belong to user)
-- SELECT get_user_order_total(1, 3); -- This will raise an exception

-- Additional useful queries

-- View all orders with their totals
SELECT 
    po.order_id,
    u.username,
    po.order_date,
    po.status,
    get_order_total(po.order_id) AS total_amount
FROM product_orders po
JOIN users u ON po.user_id = u.user_id
ORDER BY po.order_date DESC;

-- View items with their individual line totals
SELECT 
    i.item_id,
    po.order_id,
    u.username,
    i.product_name,
    i.quantity,
    i.price,
    i.total_line_price
FROM items i
JOIN product_orders po ON i.order_id = po.order_id
JOIN users u ON po.user_id = u.user_id
ORDER BY po.order_id, i.item_id;
-- Get total for order #1
SELECT get_order_total(1);

-- Get total for user #1's order #1
SELECT get_user_order_total(1, 1);

-- Get all order totals for user #1
SELECT * FROM get_user_all_orders_total(1);

-- Update an item price and see the function automatically use new values
UPDATE items SET price = 30.00 WHERE product_name = 'Mouse' AND order_id = 1;
SELECT get_order_total(1); -- Total will update automatically