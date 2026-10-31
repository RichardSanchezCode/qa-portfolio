# Test Plan — Ala Azul Issuance Flow

## 1. Objective
Document the validation of the quote, payment, and policy issuance flow of the Ala Azul quoter, using Playwright automation and an API request to obtain the payment link.

## 2. Scope
**Included**
- Preparation/registration of the quote to start the process.
- Retrieval of the payment link.
- Interaction with the payment gateway.
- Verification of a final message containing an identifier in Office-Line-Policy format.
- Documentation of the reported payment methods: card, bank transfer, and payment link delivery.

**Not included**
- Automation of the other quoters mentioned in the README.
- Direct automated validation in Alea and Yaydoo: it is not demonstrated by the received code.
- OpenPay testing, since the gateway change is described as a future one.
- Performance testing with JMeter; it will be addressed in a separate stage.

## 3. Approach and Technique
- End-to-end (E2E) testing of the main flow.
- Browser automation with Playwright Test.
- HTTP request to the QA API to obtain the payment URL.
- Verification of the confirmation text and policy identification.
- Evidence capture at the end of the flow, originally configured to a local path.

## 4. Environment
The original script pointed to a QA environment and used an internal URL. In the public version it was replaced with ******** and is read from environment variables. Before running, confirm the URL, credentials, API contract, test data, selectors, and current permissions.

## 5. Test Data
Use only fictitious data approved for QA and test payment methods provided by the vendor. Do not version personal data, credentials, cards, CVVs, or API responses containing sensitive information.

## 6. Entry Criteria
- QA environment available and authorized.
- Credentials stored outside the repository.
- Current test data.
- Payment gateway and QA API accessible.
- Quoter and selectors verified for the version under test.

## 7. Exit Criteria
- Executed scenarios have a recorded result.
- The issuance confirmation is kept as evidence without sensitive data.
- Incidents, if any, are logged with steps to reproduce.
- Published reports do not expose secrets or customer data.

## 8. Risks and Considerations
- Changes from Mercado Pago to OpenPay may alter screens, fields, redirects, and confirmation criteria.
- The shared script writes a folio counter; concurrency or parallel runs may cause conflicts.
- The original script extracts the first text matching the identifier pattern; it would be wise to strengthen the validation of the final message.
- The result of the issuance test does not by itself prove that the payment was reflected in Alea and Yaydoo; those checks require independent evidence.


