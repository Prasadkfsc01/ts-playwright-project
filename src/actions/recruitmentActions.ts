import { Page } from "@playwright/test";
import { RecruitmentPage } from "../pages/recruitment.po";

export class RecruitmentPageActions {
  private readonly recruitmentPage: RecruitmentPage;

  constructor(page: Page) {
    this.recruitmentPage = new RecruitmentPage(page);
  }

  async searchForAccountAssistant(): Promise<void> {
    await this.recruitmentPage.openRecruitment();
    await this.recruitmentPage.openJobTitleDropdown();
    await this.recruitmentPage.selectAccountAssistant();
    await this.recruitmentPage.clickSearch();
  }
}
