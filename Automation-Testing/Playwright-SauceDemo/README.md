# Playwright UI Automation — SauceDemo

## Overview
Starter end-to-end UI tests for the SauceDemo public demo application using Playwright Test and TypeScript.

**Status:** Starter files only; not executed in this ChatGPT session. No pass/fail results are claimed.

## Application
- Base URL: https://www.saucedemo.com/
- Demo credentials commonly provided by the site: `standard_user` / `secret_sauce`. Verify they remain valid.

## Scenarios
1. Login and verify the products page.
2. Add a product and verify the cart.
3. Complete checkout and verify confirmation.

## Structure
- `tests/`: Playwright specs
- `docs/Test-Plan.md`: scope and approach
- `docs/Test-Cases.md`: scenario list
- `docs/Test-Execution.md`: actual execution record template
- `docs/Bug-Reports.md`: confirmed defects only

## Execute in an environment with Node.js and Playwright installed
```bash
npm install
npx playwright install
npx playwright test
npx playwright show-report
```

You can upload and edit these files on GitHub's website without installing anything locally. Execution requires an appropriate runtime. Do not claim tests passed until actually executed.
