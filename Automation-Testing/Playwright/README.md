# E2E Test Automation — Ala Azul Quoter | SURA México

## Project Summary
This project documents a quality assurance (QA) experience focused on automating the quote, payment, and policy issuance flow for the **Ala Azul** quoter, using Playwright with JavaScript.

The automation combines a request to a QA API to obtain the payment link, interaction with the payment gateway, and verification of the final issuance confirmation. The functional goal of the process is to verify that the journey reaches policy issuance and that the payment is reflected in the corresponding internal portals, Alea and Yaydoo. Direct querying of those portals is not implemented in the public script included in this repository.

This repository presents the experience in a professional and safe manner. Due to confidentiality, no credentials, personal data, private endpoints, payment data, internal payloads, or proprietary logic are published.

## Scope of the Published Automation
- **Ala Azul** quoter.
- Starting the quote flow via API.
- Retrieving and opening the payment link.
- Interacting with the payment gateway.
- Looking for the final confirmation and the policy identifier.
- Documentation of payment scenarios reported during testing.

### Documented Payment Methods
According to the execution context provided for this portfolio, the tested scenarios had successful results:
- Card payment.
- Bank transfer payment.
- Payment link delivery.

**Traceability note:** the reviewed script, included as a public template, shows the card flow. The bank transfer and payment link delivery scenarios are documented as reported results, but their specific scripts are not part of this repository.

## Context on Other Quoters
Within the QA context, the following quoters were also identified:
- Ala Azul Plus
- Plan Vive
- Plan Empresarial SURA
- Hogar
- Movilidad
- Responsabilidad Civil por Daños a Terceros
- Plan Vida Empresarial

These products are mentioned to give context on the scope of the work. **Their scripts, automation logic, payloads, and other technical artifacts are not published**, as their publication was not authorized and they are subject to confidentiality restrictions. The automation published in this repository is limited to Ala Azul.

## Payment Gateway
During the described execution, Mercado Pago was used. It was indicated that a change to OpenPay is planned. The migration is not presented as tested or implemented in this repository; specific tests will need to be designed and executed once the change is available in an authorized environment.

## QA Documentation
- [Test Plan](Test-Plan/Test-Plan.md)
- [Test Cases](Test-Cases/Test-Cases.md)
- [Test Execution Results](Test-Execution/Test-Execution.md)
- [Incident Report](Bug-Reports/Bug-Reports.md)
- [Evidence and Privacy Criteria](Evidence/README.md)

## Repository Structure
```text
Playwright/
├── Tests/
│   ├── emitir-polizas-ala-azul.spec.js
│   └── contador.js
├── Test-Plan/
│   └── Test-Plan.md
├── Test-Cases/
│   └── Test-Cases.md
├── Test-Execution/
│   └── Test-Execution.md
├── Bug-Reports/
│   └── Bug-Reports.md
├── Evidence/
│   └── README.md
├── package.json
└── README.md
```

## Technologies
- JavaScript
- Node.js and npm
- Playwright Test
- HTTP/API requests and browser automation
- Functional E2E test documentation

## Local Setup
The test file is a **sanitized public template**, not an executable copy of the original private script. Before running in an authorized environment:

1. Install an LTS version of Node.js.
2. Copy `.env.example` to `.env` and configure only variables for an authorized QA environment.
3. Install dependencies:
   ```bash
   npm install
   npx playwright install
   ```
4. Adapt the test payload and selectors to the current contract and the authorized interface.
5. Run:
   ```bash
   npm test
   ```
6. Open the HTML report if one was generated:
   ```bash
   npm run report
   ```

## Security, Privacy, and Confidentiality
Before publishing or updating the repository, verify that the following are not included:
- Usernames, passwords, tokens, or authentication headers.
- Internal endpoints, private hostnames, or local machine paths.
- Names, emails, phone numbers, RFC tax IDs, addresses, or other personal data.
- Card numbers, expiration dates, CVVs, or other payment data.
- Real folios, internal identifiers, proprietary payloads, or non-anonymized screenshots.
- Code for products whose publication has not been authorized.

The original project's credentials were replaced with placeholders (`********`) or environment variables, and explanatory notes were added. The marked values are not functional credentials.

