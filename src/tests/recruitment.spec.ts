import { test, expect } from "@playwright/test";
import { LoginPageActions } from "../actions/loginActions";
import { RecruitmentPageActions } from "../actions/recruitmentActions";
import { RecruitmentPage } from "../pages/recruitment.po";
import { credentials } from "../testdata/credentials";

test.describe("Recruitment feature", () => {
  test("@smoke @regression should display recruitment records when searching without filters", async ({
    page,
  }) => {
    const loginActions = new LoginPageActions(page);
    const recruitmentActions = new RecruitmentPageActions(page);
    const recruitmentPage = new RecruitmentPage(page);

    await loginActions.login(credentials.username, credentials.password);
    await recruitmentActions.searchAllRecords();

    await expect(recruitmentPage.recordsFoundMessage).toBeVisible();
  });
});
