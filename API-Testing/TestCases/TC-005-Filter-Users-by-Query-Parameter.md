# TC-005 - Filter Users by Query Parameter

## Test Case Information

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-005 |
| **Title** | Verify User Filtering by Query Parameter |
| **Module** | Users API |
| **Priority** | Medium |
| **Type** | Functional |
| **Status** | Passed |

---

## Objective

Verify that the API correctly filters users using query parameters.

---

## Preconditions

- Postman is installed.
- JSONPlaceholder API is available.
- User with ID **1** exists.

---

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Send GET request to `/users?id=1`. | Request is processed successfully. |
| 2 | Verify HTTP Status Code. | Status Code is **200 OK**. |
| 3 | Validate the response body. | One user is returned. |
| 4 | Verify the returned user ID. | User ID equals **1**. |

---

## Expected Result

The API returns **200 OK** and a collection containing only the requested user.

---

## Notes

Filtering resources using query parameters is commonly used in REST APIs to retrieve subsets of data.