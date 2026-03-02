import { test, expect } from "@playwright/test";
import { LoginPageActions } from "../actions/loginActions";
const data = require("../testdata/credentials.json");

test.describe("Login feature", () => {
  test("should login with valid credentials", async ({ page }) => {
    const actions = new LoginPageActions(page);
    await actions.login(data.username, data.password);
    expect(await page.title()).toBe("OrangeHRM");
  });

  test("should display error or stay on login page for wrong password", async ({
    page,
  }) => {
    const actions = new LoginPageActions(page);
    await actions.login(data.username, data.invalidPassword);

    await expect(page).toHaveURL(/login/);
    // you can also verify an error message if one is shown, example selector below
    const errorText = await page
      .locator(".oxd-alert.oxd-alert--error")
      .textContent();
    expect(errorText).toContain("Invalid credentials");
  });
});
