# Traceability Matrix

## Overview

This document maps each test case to its corresponding test execution and current execution status. It provides traceability between planned testing activities and their execution results.

---

| Feature | Test Case | Test Execution | Status |
|-----------------------|-----------|----------------|--------|
| Retrieve user by ID | TC-001 | TE-001 | ✅ Passed |
| Create a new user | TC-002 | TE-002 | ✅ Passed |
| Update an existing user | TC-003 | TE-003 | ✅ Passed |
| Delete an existing user | TC-004 | TE-004 | ✅ Passed |
| Filter users using query parameters | TC-005 | TE-005 | ✅ Passed |
| Verify HTTP Headers | TC-006 | TE-006 | ✅ Passed |
| Verify Environment Variables | TC-007 | TE-007 | ✅ Passed |
| Configure Data Driven Testing | TC-008 | TE-008 | ⚠ Not Executed |

---

## Summary

| Metric | Value |
|--------|------:|
| Total Test Cases | 8 |
| Passed | 7 |
| Failed | 0 |
| Blocked | 0 |
| Not Executed | 1 |

---

## Notes

- All functional API test cases were successfully executed except **TC-008**.
- **TC-008** was configured correctly but could not be executed because the installed Postman plan does not support CSV execution through the Collection Runner.
- The project demonstrates API testing fundamentals, including CRUD operations, Query Parameters, HTTP Headers, Environment Variables, and Data Driven Testing preparation.