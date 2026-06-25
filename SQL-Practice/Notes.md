# SQL Notes

## Lesson 1 - Introduction to SQL

### What is SQL?

SQL (Structured Query Language) is the standard language used to communicate with databases.

QA professionals use SQL to:

* Verify test data
* Validate records created by applications
* Investigate defects
* Confirm data integrity
* Support testing activities

### Basic Database Structure

A database contains tables.

Example:

Table: employees

| id | first_name | last_name |
| -- | ---------- | --------- |
| 1  | John       | Smith     |
| 2  | Sarah      | Johnson   |
| 3  | Mike       | Brown     |

### First SQL Query

```sql
SELECT *
FROM employees;
```

Purpose:

Retrieve all records and all columns from the employees table.

### Key Concepts

* Database: Collection of data
* Table: Collection of records
* Row: Single record
* Column: Single data field

### QA Perspective

A QA tester frequently uses SQL to verify that application actions correctly store and retrieve information from the database.

---

---

## Lesson 2 - WHERE Clause

The WHERE clause is used to filter records.

Example table:

| id | first_name | department |
| -- | ---------- | ---------- |
| 1  | John       | QA         |
| 2  | Sarah      | HR         |
| 3  | Mike       | QA         |

Example:

```sql
SELECT *
FROM employees
WHERE department = 'QA';
```

Expected Result:

| id | first_name | department |
| -- | ---------- | ---------- |
| 1  | John       | QA         |
| 3  | Mike       | QA         |

Purpose:

Retrieve only the records that match a specific condition.

Common QA Usage:

* Verify a specific user exists.
* Validate test data.
* Confirm records were created successfully.
* Investigate defects related to stored data.

---

## Lesson 3 - ORDER BY

The ORDER BY clause is used to sort query results.

Example table:

| id | first_name | salary |
| -- | ---------- | ------ |
| 1  | John       | 3000   |
| 2  | Sarah      | 5000   |
| 3  | Mike       | 4000   |

Example:

```sql id="q0af2j"
SELECT *
FROM employees
ORDER BY salary DESC;
```

Expected Result:

| id | first_name | salary |
| -- | ---------- | ------ |
| 2  | Sarah      | 5000   |
| 3  | Mike       | 4000   |
| 1  | John       | 3000   |

Purpose:

Sort query results in ascending or descending order.

Common QA Usage:

* Review the latest records.
* Analyze highest or lowest values.
* Sort users alphabetically.
* Validate data ordering in reports.

---

## Lesson 4 - Aggregate Functions

Aggregate functions are used to summarize data.

Example table:

| id | first_name | salary |
| -- | ---------- | ------ |
| 1  | John       | 3000   |
| 2  | Sarah      | 5000   |
| 3  | Mike       | 4000   |

### COUNT()

```sql
SELECT COUNT(*)
FROM employees;
```

Result:

3

Purpose:

Count the number of records.

### AVG()

```sql
SELECT AVG(salary)
FROM employees;
```

Result:

4000

Purpose:

Calculate the average value.

### MAX()

```sql
SELECT MAX(salary)
FROM employees;
```

Result:

5000

Purpose:

Retrieve the highest value.

### MIN()

```sql
SELECT MIN(salary)
FROM employees;
```

Result:

3000

Purpose:

Retrieve the lowest value.

### SUM()

```sql
SELECT SUM(salary)
FROM employees;
```

Result:

12000

Purpose:

Calculate the total value.

### Common QA Usage

* Count created users.
* Verify generated records.
* Validate totals and reports.
* Analyze application data.
* Investigate data discrepancies.

---

## SQL Fundamentals Summary

Topics Completed:

* SELECT
* WHERE
* ORDER BY
* Aggregate Functions

Key QA Applications:

* Verify records created by the application
* Validate stored data
* Investigate defects
* Analyze test results
* Support backend verification

Outcome:

Successfully completed the SQL Fundamentals module focused on Quality Assurance activities.


---

## Lesson 5 - INNER JOIN

The INNER JOIN clause combines records from two tables based on a matching condition.

Example tables:

### users

| user_id | name  |
| ------- | ----- |
| 1       | John  |
| 2       | Sarah |
| 3       | Mike  |

### orders

| order_id | user_id | amount |
| -------- | ------- | ------ |
| 101      | 1       | 50     |
| 102      | 2       | 100    |
| 103      | 1       | 75     |

Example:

```sql
SELECT users.name, orders.amount
FROM users
INNER JOIN orders
ON users.user_id = orders.user_id;
```

Expected Result:

| name  | amount |
| ----- | ------ |
| John  | 50     |
| Sarah | 100    |
| John  | 75     |

Purpose:

Combine information from multiple tables.

Common QA Usage:

* Verify relationships between records.
* Validate user transactions.
* Confirm orders belong to the correct user.
* Investigate backend data issues.
* Validate data consistency across tables.

---

## Lesson 6 - LEFT JOIN

The LEFT JOIN clause returns all records from the left table and matching records from the right table.

If no match exists, NULL values are returned.

Example tables:

### users

| user_id | name  |
| ------- | ----- |
| 1       | John  |
| 2       | Sarah |
| 3       | Mike  |
| 4       | Emma  |

### orders

| order_id | user_id | amount |
| -------- | ------- | ------ |
| 101      | 1       | 50     |
| 102      | 2       | 100    |
| 103      | 1       | 75     |

Example:

```sql
SELECT users.name, orders.amount
FROM users
LEFT JOIN orders
ON users.user_id = orders.user_id;
```

Expected Result:

| name  | amount |
| ----- | ------ |
| John  | 50     |
| Sarah | 100    |
| John  | 75     |
| Mike  | NULL   |
| Emma  | NULL   |

Purpose:

Identify records that do not have matching relationships.

Common QA Usage:

* Find orphan records.
* Validate missing relationships.
* Verify data integrity.
* Detect failed processes.
* Investigate backend issues.

---

## Lesson 7 - GROUP BY

The GROUP BY clause groups rows that have the same values.

Example table:

### orders

| order_id | user_id | amount |
| -------- | ------- | ------ |
| 101      | 1       | 50     |
| 102      | 2       | 100    |
| 103      | 1       | 75     |
| 104      | 2       | 200    |
| 105      | 3       | 80     |

Example:

SELECT user_id, COUNT(*)
FROM orders
GROUP BY user_id;

Expected Result:

| user_id | count |
| ------- | ----- |
| 1       | 2     |
| 2       | 2     |
| 3       | 1     |

Purpose:

Summarize information by groups.

Common QA Usage:

* Validate reports.
* Count records by category.
* Analyze user activity.
* Verify aggregated data.
