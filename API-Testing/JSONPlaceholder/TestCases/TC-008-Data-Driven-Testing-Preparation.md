# TC-008 - Data Driven Testing Preparation

## Test Case Information

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-008 |
| **Title** | Verify Data Driven Testing Configuration |
| **Module** | Data Driven Testing |
| **Priority** | Low |
| **Type** | Functional |
| **Status** | Not Executed |

---

## Objective

Verify that the API collection is correctly configured for Data Driven Testing using CSV input files.

---

## Preconditions

- Postman is installed.
- JSONPlaceholder API is available.
- A CSV file containing test data has been created.
- The POST request body is parameterized using collection variables.

---

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Create the CSV file containing multiple user records. | CSV file is created successfully. |
| 2 | Parameterize the POST request body. | Variables are correctly referenced. |
| 3 | Configure the Collection Runner. | CSV file is ready to be loaded. |
| 4 | Attempt to execute the collection. | Collection executes using CSV data. |

---

## Expected Result

The collection should execute one iteration for each row contained in the CSV file.

---

## Notes

The collection was successfully prepared for Data Driven Testing. The execution could not be completed because the installed Postman plan does not support CSV execution through the Collection Runner.