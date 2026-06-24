# Test Notes

This document contains observations collected during exploratory testing sessions.

## Observation 1

Successful login works correctly.

Expected Result:
User is redirected to the secure area.

Actual Result:
User is redirected successfully.

Status:
PASS

--- 

## Observation 2

Login with invalid password.

Expected Result:
User should remain on the login page and receive an error message.

Actual Result:
An error message appears stating that the password is invalid

Status:
PASS

---

## Observation 3

Login with invalid username.

Expected Result:
User should remain on the login page and receive an error message.

Actual Result:
An error message appears stating that the username is invalid

Status:
PASS

---

## Observation 4

Login with empty credentials.

Expected Result:
System should prevent login and display validation.

Actual Result:
An error message appears stating that the username is invalid

Status:
PASS

---

## Observation 5

Attempted to access a protected URL after logout.

Expected Result:
User should be redirected to the login page and denied access.

Actual Result:
Application redirected the user to the login page and displayed a message indicating that authentication was required.

Status:
PASS

---

## Observation 6

Refreshed the secure page multiple times using F5.

Expected Result:
Authenticated session should remain active.

Actual Result:
Session remained active and the secure area continued to be accessible.

Status:
PASS

---

## Observation 7

Performed a hard refresh using Ctrl + F5.

Expected Result:
Authenticated session should remain active.

Actual Result:
Session remained active.

Status:
PASS

---

## Observation 8

Opened the secure URL in a new browser tab.

Expected Result:
Session should remain active across tabs.

Actual Result:
User remained authenticated.

Status:
PASS

---

## Observation 9

Logged out from one browser tab and refreshed another tab.

Expected Result:
Session should be invalidated across all tabs.

Actual Result:
User was redirected to the login page.

Status:
PASS
