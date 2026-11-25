import { defineConfig } from '@playwright/test';
export default defineConfig({testDir:'./tests',reporter:'list',use:{baseURL:'https://food.ru',browserName:'chromium',screenshot:'only-on-failure'}});
