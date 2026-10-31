# Test Cases — Check-in API

## TC-01 — User Authentication

**Objective:** verify the authentication flow prior to running the check-in requests.

**Preconditions:**

- Authorized test environment.
- Valid credentials configured outside the repository.
- API available.

**Steps:**

1. Send a POST request to the login endpoint.
2. Check the HTTP status code.
3. Extract the token from the JSON response.
4. Validate that the token is not empty and does not hold the fallback error value.

**Expected result:** successful authentication and a token available for the following requests.

**Observed result:** the report provided shows 0% errors in the Login sampler for the documented runs.

**Status:** successful according to the reported evidence.

---

## TC-02 — Load of 500 Check-ins in 10 Seconds

**Objective:** observe the endpoint's behavior with 500 requests under the configured time.

**Steps:**

1. Run the login.
2. Send 500 requests to the check-in endpoint.
3. Review the Summary Report and Aggregate Report.
4. Inspect individual responses when necessary.

**Expected result:** requests processed correctly, with errors and response times recorded.

**Observed result:** 500 successful, 0 failed, and 0% error.

**Status:** successful.

---

## TC-03 — Load of 500 Check-ins in 5 Seconds

**Objective:** compare the behavior with a more concentrated configuration than the 10-second scenario.

**Expected result:** measure the effect on response times and record errors.

**Observed result:** 500 successful, 0 failed, and 0% error. The reported average was 2,146 ms and the P95 was 5,450 ms.

**Status:** successful in terms of observed errors; response times must be evaluated against a previously defined threshold.

---

## TC-04 — Load of 1,000 Check-ins in 5 Seconds

**Objective:** observe the endpoint's behavior under 1,000 requests.

**Observed result:** 936 successful and 64 failed, with 6.40% error. HTTP 500 responses were reported in the Checkin sampler.

**Status:** with incidents.

---

## TC-05 — Load of 1,000 Check-ins in 10 Seconds

**Objective:** evaluate the behavior under 1,000 requests with the configured time.

**Initial run:** 980 successful, 20 failed, and 2.00% error.

**Repeat:** 858 successful, 142 failed, and 14.20% error.

**Status:** with incidents and variability between runs.

**Observation:** it is recommended to investigate the HTTP 500 errors and repeat the scenario under controlled conditions.

---

## TC-06 — Load of 1,000 Check-ins in 30 Seconds

**Objective:** observe the behavior with a load distributed over a longer period.

**Observed result:** 978 successful, 22 failed, and 2.20% error.

**Status:** with incidents.

---

## TC-07 — Load of 1,000 Check-ins in 60 Seconds

**Objective:** evaluate the behavior with the load distributed over the configured 60 seconds.

**Observed result:** 1,000 successful, 0 failed, and 0% error.

**Status:** successful according to the reported results.

---

## TC-08 — Load of 2,000 Check-ins in 1 Second

**Objective:** observe the behavior under a highly concentrated load configuration.

**Observed result:** 1,671 successful, 329 failed, and 16.45% error. The reported average time was 17,806 ms and the maximum was 42,089 ms.

**Status:** with incidents.

---

## TC-09 — Load of 2,000 Check-ins in 30 Seconds

**Objective:** evaluate the behavior with the load distributed over the configured 30 seconds.

**Observed result:** 1,943 successful, 57 failed, and 2.85% error.

**Status:** with incidents.

---