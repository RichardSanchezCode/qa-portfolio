import { test, expect } from '@playwright/test';

test('user can add a product and see it in the cart', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/inventory\.html/);
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await page.getByRole('link', { name: /shopping cart/i }).click();
  await expect(page).toHaveURL(/cart\.html/);
  await expect(page.locator('.cart_item')).toHaveCount(1);
});
