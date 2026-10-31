# Performance Testing with Apache JMeter

## Project Description

QA portfolio project focused on running and documenting load and stress tests on an API that registers check-in events in a human resources solution.

The test was performed with **Apache JMeter 5.6.3** and included an authentication flow followed by multiple requests to the check-in endpoint.

For confidentiality reasons, access data, environment configuration, and identifiers that could reveal private or internal information have been anonymized. The published material is for demonstration and documentation purposes.

## Objective

Evaluate the API's behavior under different request volumes and rates, identifying HTTP errors, response times, throughput, and variations in the service's behavior.

## Scope

- Authentication via an HTTP POST request.
- Execution of check-in requests via HTTP POST.
- Tests with 500, 1,000, and 2,000 requests.
- Comparison of scenarios with different configured load times.
- Review of HTTP response codes.
- Analysis of performance metrics and error rates.
- Documentation of findings and technical recommendations.

**Out of scope:** graphical user interface testing, automation of user flows with Playwright, functional testing of other modules, and a definitive determination of the maximum production capacity.

## Tools and Technologies

- Apache JMeter 5.6.3
- HTTP/HTTPS
- REST API
- JSON
- Groovy for variable processing and token extraction
- Git and GitHub for versioning and documentation

## Repository Structure

```text
Jmeter/
├── Test/
│   ├── test-plan.md
│   └── checkins.jmx
├── Bug-Reports/
│   └── Bug-Reports.md
├── Evidence/
│   └── Evidence.md
├── Test-Cases/
│   └── Test-Cases.md
├── Test-Execution/
│   └── Test-Execution.md
├── Test-Plan/
│   └── Test-Plan.md
└── README.md
```

## Results Summary

The documented runs showed different behaviors depending on the volume and concentration of the load.

| Check-ins | Configured time | Successful requests | Failed requests | Error |
|---:|---:|---:|---:|---:|
| 500 | 5 s | 500 | 0 | 0% |
| 500 | 10 s | 500 | 0 | 0% |
| 1,000 | 5 s | 936 | 64 | 6.40% |
| 1,000 | 10 s, initial | 980 | 20 | 2.00% |
| 1,000 | 10 s, repeat | 858 | 142 | 14.20% |
| 1,000 | 30 s | 978 | 22 | 2.20% |
| 1,000 | 60 s | 1,000 | 0 | 0% |
| 2,000 | 1 s | 1,671 | 329 | 16.45% |
| 2,000 | 30 s | 1,943 | 57 | 2.85% |
| 2,000 | 60 s | 2,000 | 0 | 0% |

The observed errors were associated with the `Checkin` sampler, corresponding to `POST /api/checkins`, and HTTP 500 errors were identified in the responses inspected.

The results are observations from the documented runs; they do not represent a capacity certification, nor do they allow establishing the root cause on their own.

## Documentation

- [Test Plan](Test-Plan/Test-Plan.md)
- [Test Cases](Test-Cases/Test-Cases.md)
- [Test Execution](Test-Execution/Test-Execution.md)
- [Bug Reports](Bug-Reports/Bug-Reports.md)
- [Evidence](Evidence/Evidence.md)

## Security and Confidentiality

This repository uses an anonymized version of the test plan.

- Do not publish passwords, tokens, device identifiers, or real credentials.
- Do not include personal data, real coordinates, internal domains, or infrastructure information without authorization.
- Do not upload `.jtl` files, logs, or screenshots without reviewing and anonymizing their content.
- Use only authorized environments, data, and credentials.
- The example values in the public file must not be interpreted as functional credentials.

## Considerations

The results depend on the environment conditions, the concurrency configuration, execution times, available resources, and the service's dependencies.

To validate a target capacity, it is necessary to define acceptance criteria, repeat the runs under controlled conditions, and complement the results with server metrics.

## Authorship

QA portfolio project focused on performance testing, results analysis, and technical documentation with Apache JMeter.