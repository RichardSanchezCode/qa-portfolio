# Test Execution — Check-in API

## 1. Executive Summary

Nine load configurations were analyzed, with one additional repeat of the 1,000-requests-in-10-seconds scenario.

The results show that the 500-request scenarios recorded 0% errors. For 1,000 and 2,000 requests, the results depended on the configured time and the execution conditions.

In the scenarios with the most concentrated load, HTTP 500 responses associated with the check-in endpoint were observed.

## 2. Consolidated Results

| Scenario | Requested | Successful | Failed | Error |
|---|---:|---:|---:|---:|
| 500 in 5 s | 500 | 500 | 0 | 0% |
| 500 in 10 s | 500 | 500 | 0 | 0% |
| 1,000 in 5 s | 1,000 | 936 | 64 | 6.40% |
| 1,000 in 10 s — initial | 1,000 | 980 | 20 | 2.00% |
| 1,000 in 10 s — repeat | 1,000 | 858 | 142 | 14.20% |
| 1,000 in 30 s | 1,000 | 978 | 22 | 2.20% |
| 1,000 in 60 s | 1,000 | 1,000 | 0 | 0% |
| 2,000 in 1 s | 2,000 | 1,671 | 329 | 16.45% |
| 2,000 in 30 s | 2,000 | 1,943 | 57 | 2.85% |
| 2,000 in 60 s | 2,000 | 2,000 | 0 | 0% |

## 3. Highlighted Metrics

### Scenario: 500 Requests in 10 Seconds

- Requests: 500.
- Average time: 907 ms.
- Minimum time: 376 ms.
- Maximum time: 3,690 ms.
- Standard deviation: 523.95 ms.
- P90: 1,662 ms.
- P95: 1,813 ms.
- P99: 3,448 ms.
- Error percentage: 0%.
- Reported throughput: 40.2 requests/s.

### Scenario: 1,000 Requests in 10 Seconds — Repeat

- Requests: 1,000.
- Average time: 4,667 ms.
- Minimum time: 385 ms.
- Maximum time: 15,682 ms.
- Standard deviation: 2,246.10 ms.
- P90: 7,652 ms.
- P95: 8,501 ms.
- P99: 10,696 ms.
- Error percentage: 14.20%.
- Failed requests: 142.

### Scenario: 2,000 Requests in 1 Second

- Requests: 2,000.
- Average time: 17,806 ms.
- Minimum time: 1,879 ms.
- Maximum time: 42,089 ms.
- Standard deviation: 10,335.46 ms.
- P90: 29,160 ms.
- P95: 36,863 ms.
- P99: 42,083 ms.
- Error percentage: 16.45%.
- Failed requests: 329.

### Scenario: 2,000 Requests in 60 Seconds

- Requests: 2,000.
- Average time: 699 ms.
- Minimum time: 282 ms.
- Maximum time: 7,681 ms.
- Standard deviation: 545.36 ms.
- P90: 1,431 ms.
- P95: 1,649 ms.
- P99: 3,438 ms.
- Error percentage: 0%.

## 4. Interpretation of Results

The scenarios distributed over 60 seconds recorded 0% errors for both 1,000 and 2,000 requests.

In contrast, the more concentrated scenarios showed higher error rates and, in some runs, elevated response times. The repeat of the 1,000-requests-in-10-seconds scenario showed a significant variation: the error rate went from 2.00% to 14.20%.

These results justify investigating the backend's behavior and repeating the tests under controlled conditions. By themselves, they do not allow determining the maximum capacity the application can support.

## 5. Limitations

- The times indicated for each scenario correspond to the communicated configuration, not necessarily to the actual duration of the entire execution.
- Throughput is the value reported by JMeter and should not be confused with the configured rate.
- The results do not include CPU, memory, database, or server connection metrics.
- No JTL files are available in this document for independent verification.
- The absence of HTTP errors does not by itself confirm the correct persistence of the data.

## 6. Conclusion

The execution made it possible to identify differences in behavior between load scenarios, record HTTP 500 responses on the check-in endpoint, and document the metrics needed to guide a subsequent technical investigation.

It is recommended to keep the JTL results, repeat the executions under controlled conditions, and agree on performance acceptance criteria before drawing conclusions about capacity.