-- Lesson 4: Aggregate Functions

-- Count all employees

SELECT COUNT(*)
FROM employees;

-- Calculate average salary

SELECT AVG(salary)
FROM employees;

-- Retrieve highest salary

SELECT MAX(salary)
FROM employees;

-- Retrieve lowest salary

SELECT MIN(salary)
FROM employees;

-- Calculate total salaries

SELECT SUM(salary)
FROM employees;
