import { test, expect } from '@playwright/test';

test('Text presence', async ({ page }) => {
  await test.step('Шаг 1. Открываем Food.ru', async () => {
    await page.goto('/');
  });
  await test.step('Шаг 2. Проверяем заголовок сайта', async () => {
    await expect(page).toHaveTitle(/Food\.ru/);
  });
  await test.step('Шаг 3. Проверяем текст в шапке', async () => {
    await expect(page.locator('a[href="/recipes"]').first()).toContainText('Рецепты');
  });
});
