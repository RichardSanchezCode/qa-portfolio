# Test Plan — Check-in API

## 1. General Information

| Field | Description |
|---|---|
| Project | Check-in API performance testing |
| Tool | Apache JMeter 5.6.3 |
| Reported date | October 14, 2026 |
| Test type | Load and stress |
| Protocol | HTTP/HTTPS |
| Authentication method | POST |
| Operation under test | POST /api/checkins |
| Publication status | Anonymized version for portfolio |

## 2. Objective

Evaluate the behavior of a check-in API under different request volumes and configured load times, observing response times, the number of successful and failed requests, throughput, and HTTP status codes.

## 3. Functional Scope

The automated scenario includes:

1. Preparation of the execution variables.
2. Sending the authentication request.
3. Extracting the authentication token from the JSON response.
4. Storing the token for use in subsequent requests.
5. Sending requests to the check-in endpoint.
6. Validating the HTTP status code of the responses.
7. Collecting metrics through JMeter reports.

The public version must use an example host and fictitious credentials. It must not be run against real services without authorization.

## 4. Load Scenarios

Scenarios were documented with the following volumes and configured times:

| ID | Check-in requests | Configured time |
|---|---:|---:|
| TP-01 | 500 | 5 seconds |
| TP-02 | 500 | 10 seconds |
| TP-03 | 1,000 | 5 seconds |
| TP-04 | 1,000 | 10 seconds |
| TP-05 | 1,000 | 30 seconds |
| TP-06 | 1,000 | 60 seconds |
| TP-07 | 2,000 | 1 second |
| TP-08 | 2,000 | 30 seconds |
| TP-09 | 2,000 | 60 seconds |

The scenario of 1,000 requests in 10 seconds had two documented runs with different results.

**Important:** the time indicated corresponds to the time configured for the scenario according to the report provided. It does not confirm the actual total duration of the execution.

## 5. Metrics Evaluated

- Number of samples.
- Successful and failed requests.
- Error percentage.
- Average response time.
- Minimum and maximum time.
- Standard deviation.
- P90, P95, and P99 percentiles when available.
- Throughput reported by JMeter.
- HTTP status codes received.

## 6. Acceptance Criteria

The following criteria are proposed for future executions; it has not been confirmed that they were formally agreed upon during the original tests.

- The login must complete successfully and produce a valid token.
- Check-in responses must meet the API's functional contract.
- The error percentage must stay within the threshold agreed for each scenario.
- Response percentiles must meet the performance objectives defined by the team.
- It must be verified that operations are processed correctly, not merely that they respond with a successful HTTP status code.

## 7. Risks and Constraints

- Availability and resources of the test environment.
- Variability between runs.
- Backend and database dependencies.
- Possible effects of concurrency on response times.
- Use of test data and credentials.
- Insufficient evidence to determine the service's maximum capacity.

## 8. Deliverables

- Test plan.
- Test cases.
- Anonymized JMeter test plan.
- Consolidated results.
- Technical incident report.
- Authorized and anonymized evidence.

## 9. Recommendations

Repeat the scenarios in a controlled environment, save JTL results, record the execution conditions, and define the error thresholds and latency objectives in advance.