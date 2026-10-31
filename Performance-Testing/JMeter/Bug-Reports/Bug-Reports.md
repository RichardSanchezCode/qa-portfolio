# Bug Reports — Check-in API

## Classification Note

The following records document technical incidents observed during load testing. It is not claimed that they were logged in a defect management tool or that their root cause has been confirmed.

## BUG-001 — HTTP 500 Responses on Check-in Requests Under Load

**Type:** observed technical incident.

**Component:** Check-in API.

**Endpoint:** POST /api/checkins.

**Suggested priority:** to be determined after analyzing the impact and the server logs.

**Status:** pending technical investigation.

### Description

During several load executions, HTTP 500 Internal Server Error responses were observed in the Checkin sampler.

The errors appeared in scenarios of 1,000 and 2,000 requests, with different configured load times.

### Related Scenarios

- 1,000 requests in 5 seconds: 6.40% error.
- 1,000 requests in 10 seconds, initial run: 2.00%.
- 1,000 requests in 10 seconds, repeat: 14.20%.
- 1,000 requests in 30 seconds: 2.20%.
- 2,000 requests in 1 second: 16.45%.
- 2,000 requests in 30 seconds: 2.85%.

### Expected Result

The service should process valid requests according to the API contract, maintaining the agreed error levels and response times for the load scenario.

### Observed Result

HTTP 500 responses were recorded, with error percentages varying between executions.

### Available Evidence

The technical report provided documents the error rates and notes that the HTTP 500 responses were observed in View Results Tree. The original JTL files and screenshots should be attached only if they are available and authorized for publication.

### Potential Impact

HTTP 500 responses may indicate that some operations were not processed correctly. The effect on check-in records and on persisted data needs to be confirmed.

### Recommendations

1. Review the backend logs during the error intervals.
2. Correlate the failed requests with the logged exceptions.
3. Investigate possible connection limits, locks, timeouts, or dependency issues.
4. Repeat the scenarios with the same parameters and under controlled conditions.
5. Verify the final state of the processed records.

### Root Cause

Not determined with the available evidence.

---

## BUG-002 — Error Variability Between Equivalent Runs

**Type:** reproducibility finding.

**Component:** Check-in API and execution conditions.

**Status:** pending analysis.

### Description

Two runs configured for 1,000 requests in 10 seconds showed different error percentages: 2.00% in the initial run and 14.20% in the repeat.

### Expected Result

When a scenario is repeated under equivalent conditions, the results should be consistent enough to allow a technical comparison. They are not required to be identical, but relevant variations must be investigated.

### Observed Result

The difference between the error rates was 12.20 percentage points.

### Recommendations

- Confirm the exact concurrency and ramp-up configuration.
- Record the environment conditions and the execution time.
- Verify the state of the dependencies and server resources.
- Compare logs and failed responses from both runs.
- Perform additional repetitions.

### Root Cause

Not determined.

---

## Overall Status

Two findings that require investigation were documented. There is not enough information to claim that they have been fixed or closed.