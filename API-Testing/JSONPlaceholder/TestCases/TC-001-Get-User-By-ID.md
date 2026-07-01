# TC-001 - Get User by ID

## Test Case Information

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-001 |
| **Title** | Verify GET User by ID |
| **Module** | Users API |
| **Priority** | High |
| **Type** | Functional |
| **Status** | Passed |

---

## Objective

Verify that the API returns the correct user information when requesting an existing User ID.

---

## Preconditions

- Postman is installed.
- JSONPlaceholder API is available.
- User with ID **1** exists.

---

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Send GET request to `/users/1`. | Request is processed successfully. |
| 2 | Verify HTTP Status Code. | Status Code is **200 OK**. |
| 3 | Validate the response body. | User information is returned. |
| 4 | Verify the returned ID. | User ID equals **1**. |

---

## Expected Result

The API returns Status Code **200 OK** and the correct user information.

---

## Notes

This test validates the retrieval of an existing resource.