import { test, expect } from "@playwright/test";
import { LoginPageActions } from "../actions/loginActions";
import { DashboardPage } from "../pages/dashboard.po";
import { credentials, invalidCredentials } from "../testdata/credentials";

test.describe("Login feature", () => {
  test("@smoke @regressionshould login with valid credentials", async ({
    page,
  }) => {
    const loginActions = new LoginPageActions(page);
    const dashboardPage = new DashboardPage(page);

    await loginActions.login(credentials.username, credentials.password);
    await expect(page).toHaveTitle("OrangeHRM");
    await expect(dashboardPage.dashboardHeading).toBeVisible();
  });

  test("@regression should display an error for invalid credentials", async ({
    page,
  }) => {
    const loginActions = new LoginPageActions(page);

    await loginActions.login(
      credentials.username,
      invalidCredentials.invalidPassword,
    );
    await expect(page).toHaveURL(/login/);
    await expect(page.getByText("Invalid credentials")).toBeVisible();
  });
});
