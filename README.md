<p align="center">
  <img src="assets/QA_Banner.png" alt="QA Engineer Portfolio Banner" width="100%">
</p>

---

# QA Engineer Portfolio

Welcome to my Quality Assurance portfolio.

This repository showcases my learning journey and professional experience through hands-on projects organized by QA disciplines, including **Manual Testing**, **Exploratory Testing**, **API Testing**, **Database Testing**, **Automation Testing**, and **Performance Testing**.

Each project demonstrates QA practices such as test planning, test case design, test execution, bug reporting, evidence collection, traceability, and technical documentation.

My goal is to continuously expand this portfolio with automation frameworks, database validation, API automation, performance testing, and CI/CD while developing the skills required for a professional QA Engineer role.

---

# Repository Structure

```text
QA-Engineer-Portfolio
│
├── Manual-Testing
│   ├── SauceDemo
│   └── OrangeHRM
│
├── Exploratory-Testing
│   └── TheInternet
│
├── API-Testing
│   └── JSONPlaceholder
│
├── Database-Testing
│   └── SQL-Practice
│
├── Automation-Testing
│   └── PlayWright
│
├── Performance-Testing
│   └── JMeter
│
├── assets
│
└── README.md
```

---

# Portfolio Summary

| QA Area             | Projects                                    | Status       |
| ------------------- | ------------------------------------------- | ------------ |
| Manual Testing      | SauceDemo, OrangeHRM                        | ✅ Completed  |
| Exploratory Testing | TheInternet                                 | ✅ Completed  |
| API Testing         | JSONPlaceholder REST API                    | ✅ Completed  |
| Database Testing    | SQL Practice                                | ✅ Completed  |
| Automation Testing  | Playwright – SURA México Insurance Platform | ✅ Completed* |
| Performance Testing | Apache JMeter – Check-in Stress Testing     | ✅ Completed* |

* The Automation Testing and Performance Testing projects were carried out at Nelumbo Consultores. Public documentation is limited to non-confidential information. Internal scripts, business data, detailed results, and evidence are not published due to company confidentiality requirements.

---

# Project Details

# Manual Testing

---

## 1. SauceDemo

**Application Type:** E-commerce Web Application

**Testing Type:** Manual Testing

### Modules Tested

* Login
* Products
* Cart
* Checkout

### Test Results

| Module   | Test Cases | Status |
| -------- | ---------: | ------ |
| Login    |          5 | PASS   |
| Products |         10 | PASS   |
| Cart     |          6 | PASS   |
| Checkout |          6 | PASS   |

**Total Test Cases:** 27

**Pass Rate:** 100%

### Deliverables

* Test Plan
* Test Cases
* Test Execution Results
* Bug Reports
* Test Evidence

---

## 2. OrangeHRM

**Application Type:** Human Resource Management System (HRMS)

**Testing Type:** Manual Testing

### Modules Tested

* Login
* Dashboard
* Admin
* PIM
* Leave
* Recruitment

### Test Results

| Module      | Test Cases | Status |
| ----------- | ---------: | ------ |
| Login       |          6 | PASS   |
| Dashboard   |          5 | PASS   |
| Admin       |          5 | PASS   |
| PIM         |          5 | PASS   |
| Leave       |          5 | PASS   |
| Recruitment |          5 | PASS   |

**Total Test Cases:** 31

**Pass Rate:** 100%

### Deliverables

* Test Plan
* Test Cases
* Test Execution Results
* Bug Reports
* Test Evidence

---

# Exploratory Testing

---

## 1. TheInternet

**Application Type:** QA Practice Web Application

**Testing Type:** Exploratory Testing

### Modules Explored

* Form Authentication
* Dynamic Controls
* Dropdown
* Inputs

### Test Results

| Area                | Status                |
| ------------------- | --------------------- |
| Form Authentication | PASS                  |
| Dynamic Controls    | PASS (1 Defect Found) |
| Dropdown            | PASS                  |
| Inputs              | PASS                  |

### Defects Identified

| Bug ID  | Severity | Status |
| ------- | -------- | ------ |
| BUG-001 | Medium   | Open   |

### Deliverables

* Test Notes
* Bug Reports
* Test Evidence

---

# API Testing

---

## 1. JSONPlaceholder REST API

**Testing Type:** Manual API Testing using Postman

### Topics Covered

* GET Requests
* POST Requests
* PUT Requests
* DELETE Requests
* Query Parameters
* HTTP Headers
* Environment Variables
* Collection Variables
* Data-Driven Testing
* Response Validation
* HTTP Status Codes

### Test Results

| Feature               | Status     |
| --------------------- | ---------- |
| CRUD Operations       | PASS       |
| Query Parameters      | PASS       |
| HTTP Headers          | PASS       |
| Environment Variables | PASS       |
| Data-Driven Testing   | Configured |

### Deliverables

* Test Cases
* Test Execution Reports
* Testing Evidence
* QA Analysis Notes
* Traceability Matrix
* Postman Collection
* Postman Environment

---

# Database Testing

---

## 1. SQL Practice

**Project Type:** SQL Fundamentals for Quality Assurance

### Topics Covered

* SELECT
* WHERE
* ORDER BY
* Aggregate Functions
* INNER JOIN
* LEFT JOIN
* GROUP BY
* HAVING

### Deliverables

* SQL Query Files
* Learning Notes
* Documentation

---

# Automation Testing

---

## 1. SURA México Insurance Platform

**Testing Type:** UI Test Automation

**Automation Framework:** Playwright

**Programming Language:** TypeScript

**Company:** Nelumbo Consultores

### Project Overview

This project involved automating key business processes within an insurance platform for SURA México.

The automation focused on three main stages of the insurance purchasing process:

* Insurance quotation.
* Payment gateway.
* Insurance policy issuance.

### Insurance Products Covered

The project scope included the following insurance products:

* Ala Azul
* Ala Azul Plus
* Plan Empresarial SURA
* Plan Vida Empresarial
* Hogar
* Movilidad
* Responsabiidad Civil Daños a Terceros
* Plan Vive

### Automation Scope

The automation implementation was developed for the **Ala Azul** insurance product, covering the quotation, payment gateway, and policy issuance processes.

The other insurance products were also part of the broader project scope. However, their automation scripts and implementation details are not included in this public portfolio due to company confidentiality requirements.

### Technologies and Tools

* Playwright
* TypeScript
* Playwright Test
* UI Test Automation

### Public Documentation

A basic demonstration of the Ala Azul automation implementation is included in this portfolio.

The public example focuses on the automation approach and does not expose internal company information, confidential business data, or proprietary implementation details.

Automation scripts and detailed information associated with the other insurance products are not publicly available due to confidentiality requirements.

---

## Coming Soon

Future projects and improvements planned for this section include:

* API Automation
* End-to-End Test Automation
* Advanced SQL Testing
* GitHub Actions (CI/CD)
* Mobile Testing (Appium)

---

# Performance Testing

---

## 1. Apache JMeter – Check-in Stress Testing

**Testing Type:** Stress Testing

**Tool:** Apache JMeter

**Company:** Nelumbo Consultores

### Project Overview

This project involved performing stress tests to evaluate the system's capacity to handle check-in operations under different workload conditions.

The main objective was to measure how many check-ins the system could support while maintaining its operation over a defined period.

### Testing Objectives

* Evaluate the system's capacity to process check-in requests.
* Measure the number of check-ins supported under different workload conditions.
* Observe system behavior under increased load.
* Evaluate system stability during a defined testing period.
* Identify potential performance limitations under stress conditions.

### Performance Metrics

The testing approach focused on evaluating performance indicators such as:

* Number of check-in requests.
* Response time.
* Throughput.
* Error rate.
* System behavior under sustained load.
* Stability during the test period.

### Tools and Technologies

* Apache JMeter
* HTTP Request Samplers
* Thread Groups
* Performance Test Plans
* Test Execution Reports

### Deliverables

* Performance Test Plans
* Test Cases
* JMeter Test Plans
* Execution Reports
* Performance Testing Documentation

**Confidentiality Note:** This project was carried out at Nelumbo Consultores. Internal system information, detailed test configurations, execution data, and company-specific results are not published in this portfolio.

---

# Skills Demonstrated

## Manual Testing

* Test Planning
* Test Case Design
* Test Execution
* Bug Reporting
* Exploratory Testing
* Evidence Collection

### Projects

* SauceDemo
* OrangeHRM
* TheInternet

---

## API Testing

* REST API Testing
* HTTP Methods
* HTTP Status Codes
* Response Validation
* Query Parameters
* HTTP Headers
* Environment Variables
* Collection Variables
* Data-Driven Testing
* Traceability Matrix
* QA Documentation

### Projects

* JSONPlaceholder REST API

---

## Database Testing

* SQL Fundamentals
* Database Validation
* Data Analysis

### Projects

* SQL Practice

---

## Automation Testing

* UI Test Automation
* Playwright
* TypeScript
* Test Data Management
* Automated Test Scripts
* End-to-End Testing Concepts
* Automated Regression Testing

### Projects

* SURA México Insurance Platform – Ala Azul

---

## Performance Testing

* Performance Test Planning
* Stress Testing
* Load Generation with Apache JMeter
* Concurrent Request Simulation
* Check-in Capacity Evaluation
* Response Time Analysis
* Throughput Monitoring
* Error Rate Analysis
* Performance Reporting

### Projects

* Apache JMeter – Check-in Stress Testing

---

## Version Control & Documentation

* Git
* GitHub
* Markdown
* Professional QA Documentation

---

# Tools Used

* Postman
* JSONPlaceholder REST API
* Google Chrome
* OrangeHRM
* SauceDemo
* SQL
* Git
* GitHub
* Markdown
* Playwright
* TypeScript
* Apache JMeter

---

# Future Learning Roadmap

This portfolio will continue to grow with professional QA projects covering:

* Manual Testing
* API Testing
* Database Testing
* Automation Testing
* API Automation
* CI/CD with GitHub Actions
* Performance Testing
* Mobile Testing with Appium

---

# About Me

I am an **Electronic Engineer** currently working in **Quality Assurance**, with experience in manual testing, exploratory testing, API testing, database testing, test automation, and performance testing.

Through this portfolio, I document my continuous learning journey and professional experience by developing QA projects that demonstrate technical knowledge, structured testing practices, and professional documentation.

My objective is to continue growing as a QA Engineer, strengthening my skills in Manual Testing, API Testing, Database Validation, Test Automation, and Performance Testing using modern industry tools.

---

<p align="center">
  <img src="assets/QA_Logo.png" alt="QA Portfolio Logo" width="250">
</p>
