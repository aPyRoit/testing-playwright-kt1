import { test, expect } from '@playwright/test';

test('Interactive elements', async ({ page }) => {
  await test.step('Шаг 1. Открываем главную страницу', async () => {
    await page.goto('/');
  });
  await test.step('Шаг 2. Вводим запрос «Шарлотка»', async () => {
    const search = page.getByPlaceholder('Что вы хотите приготовить сегодня?');
    await search.fill('Шарлотка');
    await expect(search).toHaveValue('Шарлотка');
  });
  await test.step('Шаг 3. Отправляем форму и проверяем результаты', async () => {
    await page.getByRole('button', { name: 'Найти', exact: true }).click();
    await expect(page).toHaveURL(/\/search\?query=/);
    await expect(page.locator('body')).toContainText('Шарлотка: результаты поиска');
  });
});
