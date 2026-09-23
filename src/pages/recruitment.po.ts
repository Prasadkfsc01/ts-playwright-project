import { Locator, Page } from "@playwright/test";

export class RecruitmentPage {
  readonly page: Page;

  readonly recruitmentMenu: Locator;
  readonly searchButton: Locator;
  readonly recordsFoundMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.recruitmentMenu = page.getByRole("link", {
      name: "Recruitment",
    });

    this.searchButton = page.getByRole("button", {
      name: "Search",
    });

    this.recordsFoundMessage = page.getByText(/\(\d+\)\s+Records Found/);
  }

  async openRecruitment(): Promise<void> {
    await this.recruitmentMenu.click();
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }
}
