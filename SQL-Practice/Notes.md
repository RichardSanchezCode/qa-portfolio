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
