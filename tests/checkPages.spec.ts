import { test, expect } from "@playwright/test";

// Test for the Home page
test("home page de", async ({ page }) => {
  await page.goto("http://localhost:3000/de");
  await expect(page.locator("text=Bildung für Alle.")).toBeVisible();
});
test("home page en", async ({ page }) => {
  await page.goto("http://localhost:3000/en");
  await expect(page.locator("text=Education for All.")).toBeVisible();
});

// Test for the Projects page
test("projects page de", async ({ page }) => {
  await page.goto("http://localhost:3000/de/projects");
  await expect(page.locator("h1:has-text('Unsere Projekte')")).toBeVisible();
});
test("projects page en", async ({ page }) => {
  await page.goto("http://localhost:3000/en/projects");
  await expect(page.locator("h1:has-text('Our Projects')")).toBeVisible();
});

// Test for the About page
test("about page de", async ({ page }) => {
  await page.goto("http://localhost:3000/de/about");
  await expect(page.locator("text=Bildung für Alle.")).toBeVisible();
});
test("about page en", async ({ page }) => {
  await page.goto("http://localhost:3000/en/about");
  await expect(page.locator("text=Education for all.")).toBeVisible();
});
