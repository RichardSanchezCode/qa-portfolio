# Test Notes

This document contains observations collected during exploratory testing sessions.

## Form Authentication

### Observation 1

Successful login works correctly.

Status: PASS

### Observation 2

Login with invalid password displays an error message and prevents access.

Status: PASS

### Observation 3

Login with invalid username displays an error message and prevents access.

Status: PASS

### Observation 4

Login with empty credentials displays the same error message used for invalid usernames.

Assessment:
Behavior may be intentional for security reasons.

Status: PASS

### Observation 5

Attempted to access a protected URL after logout.

Result:
The application redirected the user to the login page and displayed an authentication message.

Status: PASS

### Observation 6

Refreshed the secure page multiple times using F5.

Result:
Session remained active.

Status: PASS

### Observation 7

Performed a hard refresh using Ctrl + F5.

Result:
Session remained active.

Status: PASS

### Observation 8

Opened the secure URL in a new browser tab.

Result:
User remained authenticated.

Status: PASS

### Observation 9

Logged out from one browser tab and refreshed another tab.

Result:
Session was invalidated and access was denied.

Status: PASS

---

## Dynamic Controls

### Observation 10

Checkbox was successfully removed and restored using the Remove and Add buttons.

Status: PASS

### Observation 11

The Enable action required a short loading period before the input field became editable.

Assessment:
Expected behavior for dynamic controls.

Status: PASS

### Observation 12

Repeated Remove/Add actions caused the checkbox position to change and generated duplicated "A checkbox" labels.

Assessment:
Potential defect identified.

Reference:
BUG-001.md

Status: FAIL

---

## Dropdown

### Observation 13

Available options could be selected correctly.

Status: PASS

### Observation 14

The default option "Please select an option" could not be reselected after another option was chosen.

Assessment:
Expected behavior.

Status: PASS

### Observation 15

Selected values were reset after refreshing the page.

Assessment:
Expected behavior.

Status: PASS

---

## Inputs

### Observation 16

The input field accepted positive and negative integer values.

Status: PASS

### Observation 17

The input field rejected alphabetic characters except scientific notation formats such as "e".

Status: PASS

### Observation 18

The increment and decrement controls functioned correctly.

Status: PASS

### Observation 19

Decimal values such as 1.5 and 1,5 were rejected.

Assessment:
No requirement indicated support for decimal values.

Status: PASS

### Observation 20

The field did not automatically prepend a leading zero when entering decimal separators.

Assessment:
Potential usability enhancement, not considered a defect.

Status: PASS

---

## Summary

Total Observations: 20

Passed Observations: 19

Failed Observations: 1

Defects Identified: 1

Reference:
BUG-001.md
