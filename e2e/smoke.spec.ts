import { expect, test } from "@playwright/test";

test("home renders hero and sections", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Yoga Prastyo");
  for (const id of ["about", "skills", "project", "contact"]) {
    await expect(page.locator(`#${id}`)).toBeAttached();
  }
});

test("navigation reaches projects and blog", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Projects", exact: true }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await page.getByRole("link", { name: "Blog", exact: true }).click();
  await expect(page).toHaveURL(/\/blog$/);
});

test("project detail renders from seed", async ({ page }) => {
  await page.goto("/projects/cashier");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Cashier");
});

test("unknown slug returns 404", async ({ page }) => {
  const res = await page.goto("/blog/does-not-exist");
  expect(res?.status()).toBe(404);
});

test("theme toggle switches and persists", async ({ page }) => {
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Toggle dark mode" });
  const wasDark = await page.locator("html").evaluate((el) => el.classList.contains("dark"));
  await toggle.click();
  await expect(page.locator("html")).toHaveClass(wasDark ? /^(?!.*dark)/ : /dark/);
  await page.reload();
  const isDark = await page.locator("html").evaluate((el) => el.classList.contains("dark"));
  expect(isDark).toBe(!wasDark);
});
