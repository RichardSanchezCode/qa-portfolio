-- Lesson 1: Basic SELECT Statements

-- Retrieve all columns and all records

SELECT *
FROM employees;

-- Retrieve a specific column

SELECT first_name
FROM employees;

-- Retrieve multiple columns

SELECT first_name, last_name
FROM employees;

-- Retrieve employee IDs and names

SELECT id, first_name, last_name
FROM employees;