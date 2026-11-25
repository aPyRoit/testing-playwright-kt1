import { test, expect } from '@playwright/test';

test('Page change', async ({ page }) => {
  await test.step('Шаг 1. Открываем главную страницу', async () => {
    await page.goto('/');
  });
  await test.step('Шаг 2. Открываем карточку рецепта шарлотки', async () => {
    const recipe = page.locator('a[href*="/recipes/199-sharlotka"]').first();
    await expect(recipe).toBeVisible();
    await recipe.click();
  });
  await test.step('Шаг 3. Проверяем адрес и содержимое рецепта', async () => {
    await expect(page).toHaveURL(/\/recipes\/199-sharlotka/);
    await expect(page.locator('body')).toContainText('Ингредиенты');
    await page.screenshot({ path: 'test-results/food-ru-recipe.png', fullPage: true });
  });
});
