-- Lesson 8: HAVING

-- Users with more than one order

SELECT user_id, COUNT(*)
FROM orders
GROUP BY user_id
HAVING COUNT(*) > 1;

-- Users whose total purchases exceed 100

SELECT user_id, SUM(amount)
FROM orders
GROUP BY user_id
HAVING SUM(amount) > 100;

-- Users whose average purchase exceeds 90

SELECT user_id, AVG(amount)
FROM orders
GROUP BY user_id
HAVING AVG(amount) > 90;
