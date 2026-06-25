-- Lesson 5: INNER JOIN

-- Retrieve users and their orders

SELECT users.name, orders.amount
FROM users
INNER JOIN orders
ON users.user_id = orders.user_id;

-- Retrieve users, order IDs, and order amounts

SELECT users.name, orders.order_id, orders.amount
FROM users
INNER JOIN orders
ON users.user_id = orders.user_id;

-- Retrieve all order information with customer names

SELECT users.user_id, users.name, orders.order_id, orders.amount
FROM users
INNER JOIN orders
ON users.user_id = orders.user_id;

-- Lesson 6: LEFT JOIN

-- Retrieve all users and their orders

SELECT users.name, orders.amount
FROM users
LEFT JOIN orders
ON users.user_id = orders.user_id;

-- Find users without orders

SELECT users.name
FROM users
LEFT JOIN orders
ON users.user_id = orders.user_id
WHERE orders.order_id IS NULL;