# TC-003 - Update User

## Test Case Information

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-003 |
| **Title** | Verify User Update |
| **Module** | Users API |
| **Priority** | Medium |
| **Type** | Functional |
| **Status** | Passed |

---

## Objective

Verify that the API successfully updates an existing user.

---

## Preconditions

- Postman is installed.
- JSONPlaceholder API is available.
- User with ID **1** exists.

---

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Send PUT request to `/users/1`. | Request is processed successfully. |
| 2 | Verify HTTP Status Code. | Status Code is **200 OK**. |
| 3 | Validate updated response body. | Updated user information is returned. |

---

## Expected Result

The API returns Status Code **200 OK** with the updated user information.

---

## Notes

The update is simulated because JSONPlaceholder does not persist changes.