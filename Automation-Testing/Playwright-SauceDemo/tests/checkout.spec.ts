import { test, expect } from '@playwright/test';

test('user can complete checkout with valid information', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await page.getByRole('link', { name: /shopping cart/i }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByPlaceholder('First Name').fill('Test');
  await page.getByPlaceholder('Last Name').fill('User');
  await page.getByPlaceholder('Zip/Postal Code').fill('12345');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page).toHaveURL(/checkout-step-two\.html/);
  await page.getByRole('button', { name: 'Finish' }).click();
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});
