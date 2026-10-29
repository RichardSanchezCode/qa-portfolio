# Test Cases — SauceDemo

| ID | Scenario | Steps | Expected result | Spec |
|---|---|---|---|---|
| PW-LOGIN-001 | Valid login | Open site; enter demo credentials; click Login | Products page is visible | `tests/login.spec.ts` |
| PW-CART-001 | Add product | Log in; add first product; open cart | Cart contains one item | `tests/cart.spec.ts` |
| PW-CHECKOUT-001 | Checkout | Log in; add item; checkout; enter valid details; continue; finish | Order confirmation is visible | `tests/checkout.spec.ts` |

These are planned scenarios. Record actual execution status after running the suite.
