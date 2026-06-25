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
