# TC-004 - Delete User

## Test Case Information

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-004 |
| **Title** | Verify User Deletion |
| **Module** | Users API |
| **Priority** | Medium |
| **Type** | Functional |
| **Status** | Passed |

---

## Objective

Verify that the API successfully processes a DELETE request for an existing user.

---

## Preconditions

- Postman is installed.
- JSONPlaceholder API is available.
- User with ID **1** exists.

---

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Send DELETE request to `/users/1`. | Request is processed successfully. |
| 2 | Verify HTTP Status Code. | Status Code is **200 OK**. |
| 3 | Validate the response body. | An empty JSON object `{}` is returned. |

---

## Expected Result

The API returns **200 OK** and an empty response body, indicating that the deletion request was successfully processed.

---

## Notes

JSONPlaceholder simulates the DELETE operation and does not permanently remove the resource.