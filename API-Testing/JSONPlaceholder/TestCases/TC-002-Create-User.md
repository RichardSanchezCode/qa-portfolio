# TC-002 - Create User

## Test Case Information

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-002 |
| **Title** | Verify User Creation |
| **Module** | Users API |
| **Priority** | High |
| **Type** | Functional |
| **Status** | Passed |

---

## Objective

Verify that the API successfully creates a new user.

---

## Preconditions

- Postman is installed.
- JSONPlaceholder API is available.

---

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Send POST request with valid user data. | Request is processed successfully. |
| 2 | Verify HTTP Status Code. | Status Code is **201 Created**. |
| 3 | Validate response body. | Generated user information is returned. |
| 4 | Verify generated ID. | A new user ID is returned. |

---

## Expected Result

The API returns Status Code **201 Created** and the created user information.

---

## Notes

JSONPlaceholder simulates resource creation without permanently storing the new user.