-- Lesson 7: GROUP BY

-- Count orders per user

SELECT user_id, COUNT(*)
FROM orders
GROUP BY user_id;

-- Calculate total amount per user

SELECT user_id, SUM(amount)
FROM orders
GROUP BY user_id;

-- Calculate average amount per user

SELECT user_id, AVG(amount)
FROM orders
GROUP BY user_id;
