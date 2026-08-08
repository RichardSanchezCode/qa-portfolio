# TC-007 - Verify Environment Variables Configuration

## Test Case Information

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-007 |
| **Title** | Verify API Requests Using Environment Variables |
| **Module** | Environment Variables |
| **Priority** | Medium |
| **Type** | Functional |
| **Status** | Passed |

---

## Objective

Verify that API requests correctly use the configured Environment Variable (`baseUrl`) instead of hardcoded URLs.

---

## Preconditions

- Postman is installed.
- The QA Environment has been created.
- The `baseUrl` variable is configured.
- JSONPlaceholder API is available.

---

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Select the QA Environment. | QA Environment is active. |
| 2 | Verify that the `baseUrl` variable is configured. | The variable contains the API base URL. |
| 3 | Send the GET request using `{{baseUrl}}/users/1`. | The request is processed successfully. |
| 4 | Verify HTTP Status Code. | Status Code is **200 OK**. |
| 5 | Validate the response body. | User information is returned correctly. |

---

## Expected Result

The request is executed successfully using the configured Environment Variable without requiring hardcoded URLs.

---

## Notes

Using Environment Variables improves maintainability by allowing the same collection to run across different environments without modifying the requests.