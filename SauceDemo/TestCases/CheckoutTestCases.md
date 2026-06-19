# Checkout Test Cases

| Test Case ID    | Title                                    | Expected Result                                            |
| --------------- | ---------------------------------------- | ---------------------------------------------------------- |
| TC-CHECKOUT-001 | Complete checkout with valid information | Order is completed successfully                            |
| TC-CHECKOUT-002 | Checkout with empty First Name           | Error message is displayed                                 |
| TC-CHECKOUT-003 | Checkout with empty Last Name            | Error message is displayed                                 |
| TC-CHECKOUT-004 | Checkout with empty Postal Code          | Error message is displayed                                 |
| TC-CHECKOUT-005 | Cancel checkout process                  | User is redirected to the previous page                    |
| TC-CHECKOUT-006 | Verify order summary and pricing         | Item total, tax, and total amount are calculated correctly |

## Test Data

| Field       | Value |
| ----------- | ----- |
| First Name  | John  |
| Last Name   | Doe   |
| Postal Code | 12345 |

## Notes

The objective of these test cases is to validate the main checkout workflow, mandatory field validations, navigation behavior, and pricing calculations.
