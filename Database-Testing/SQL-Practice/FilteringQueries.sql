-- Lesson 2: Filtering Data with WHERE

-- Retrieve all QA employees

SELECT *
FROM employees
WHERE department = 'QA';

-- Retrieve employee with ID 1

SELECT *
FROM employees
WHERE id = 1;

-- Retrieve employees named John

SELECT *
FROM employees
WHERE first_name = 'John';

-- Retrieve employees with salary greater than 5000

SELECT *
FROM employees
WHERE salary > 5000;

-- Retrieve employees with salary less than 3000

SELECT *
FROM employees
WHERE salary < 3000;
