# TC-006 - Verify HTTP Headers

## Test Case Information

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-006 |
| **Title** | Verify HTTP Headers |
| **Module** | Users API |
| **Priority** | Medium |
| **Type** | Functional |
| **Status** | Passed |

---

## Objective

Verify that HTTP headers are correctly included in API requests.

---

## Preconditions

- Postman is installed.
- JSONPlaceholder API is available.
- Custom header `X-Environment: QA` is configured.

---

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Configure the custom header `X-Environment: QA`. | Header is added to the request. |
| 2 | Send the POST request. | Request is processed successfully. |
| 3 | Verify HTTP Status Code. | Status Code is **201 Created**. |
| 4 | Review the request headers. | The custom header is included in the request. |

---

## Expected Result

The request is successfully executed with the configured HTTP headers.

---

## Notes

JSONPlaceholder ignores custom headers because it is a mock API. In production systems, headers are commonly used for authentication, API versioning, environment identification, and security.