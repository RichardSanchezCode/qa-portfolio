# BUG-001

## Title

Checkbox label is duplicated and layout changes after repeated remove and add actions

## Environment

* Browser: Google Chrome
* Operating System: Windows 11
* Application: The Internet - Dynamic Controls

## Severity

Medium

## Priority

Medium

## Steps to Reproduce

1. Open the Dynamic Controls page.
2. Click Remove.
3. Wait until the checkbox is removed.
4. Click Add.
5. Repeat the Remove/Add cycle three times.

## Expected Result

The checkbox should return to its original position and only one checkbox label should be displayed.

## Actual Result

The checkbox changes position and multiple "A checkbox" labels are added to the page after repeated remove/add actions.

## Status

Open
