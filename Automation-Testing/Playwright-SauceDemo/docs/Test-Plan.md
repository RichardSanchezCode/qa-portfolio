# Test Plan — SauceDemo

## Objective
Demonstrate UI automation for core shopping workflows on the SauceDemo demo site.

## Scope
- Login
- Add an item to the cart
- Complete checkout

## Approach
Use Playwright Test with TypeScript, user-facing locators, and assertions on important page states. Capture trace, screenshot, and video according to the config.

## Entry criteria
- Demo site is available and demo credentials are valid.
- Execution environment has Node.js, dependencies, and Playwright browsers installed.

## Exit criteria
- Actual result recorded for each scenario.
- Failures have reproducible steps and safe evidence.

## Risks
The public demo application may change or be unavailable; recheck selectors and credentials if tests fail.
