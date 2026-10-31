# Test Cases — Ala Azul

## Conventions
- **Reported result:** information communicated by the author.
- **Reviewed implementation:** verifiable presence in the received file `emitir-polizas-ala-azul.spec.js`.
- No personal data or real payment values are included.

| ID | Scenario | Summarized steps | Expected result | Documented status |
|---|---|---|---|---|
| TC-001 | Quote and payment link generation | Send the quote preparation request to the QA API and retrieve the redirect URL. | The API responds successfully and returns a valid payment URL. | Implemented in the received script; overall result reported as successful. |
| TC-002 | Card payment | Open the link, select the billing frequency, fill in the test card fields, accept the required notices, and continue. | The payment gateway processes the payment and displays a final confirmation with a policy identifier. | Implemented in the received script; result reported as successful. |
| TC-003 | Policy issuance | Wait for the final confirmation and verify that an identifier in Office-Line-Policy format appears. | A policy identifier is displayed and a screenshot of the final screen is saved as evidence. | Partially implemented in the received script; result reported as successful. |
| TC-004 | Bank transfer payment | Complete the quote flow and select bank transfer in the payment gateway; record the transaction result. | The gateway confirms the result and the issuance flow follows the expected behavior for that payment method. | Successful result reported; does not appear as a standalone scenario in the received script. |
| TC-005 | Payment link delivery | Generate and send the payment link through the authorized functional flow; open it and complete the payment according to the applicable method. | The link is generated and allows the payment and issuance process to continue according to the product rules. | Successful result reported; does not appear as a standalone scenario in the received script. |
| TC-006 | Payment reflected in Alea and Yaydoo | Query both portals using the corresponding folio/identifier after payment and issuance. | The payment is correctly reflected in both portals. | Objective described by the author; no direct verification in the shared code. |

## Observations
1. The results for TC-AA-004 and TC-AA-005 come from the context provided, not from an implementation visible in the received file.
2. TC-AA-006 requires additional evidence (screenshots or anonymized logs from both portals) to be marked as executed and passed.
3. To maintain traceability, record the date, environment, browser, version, anonymized folio, result, and evidence link for each execution.
