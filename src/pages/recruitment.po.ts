import { Locator, Page } from "@playwright/test";

export class RecruitmentPage {
  readonly page: Page;

  readonly recruitmentMenu: Locator;
  readonly jobTitleDropdown: Locator;
  readonly searchButton: Locator;
  readonly accountAssistantOption: Locator;
  readonly juniorAccountAssistantVacancy: Locator;

  constructor(page: Page) {
    this.page = page;

    this.recruitmentMenu = page.getByRole("link", {
      name: "Recruitment",
    });

    this.jobTitleDropdown = page
      .locator(".oxd-select-text--after > .oxd-icon")
      .first();

    this.accountAssistantOption = page.getByText("Account Assistant", {
      exact: true,
    });

    this.searchButton = page.getByRole("button", {
      name: "Search",
    });

    this.juniorAccountAssistantVacancy = page
      .getByText("Junior Account Assistant", { exact: true })
      .first();
  }

  async openRecruitment(): Promise<void> {
    await this.recruitmentMenu.click();
  }

  async openJobTitleDropdown(): Promise<void> {
    await this.jobTitleDropdown.click();
  }

  async selectAccountAssistant(): Promise<void> {
    await this.accountAssistantOption.click();
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }
}
