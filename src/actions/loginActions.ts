import { Page } from "@playwright/test";
import { LoginPage } from "../pages/login.po";

export class LoginPageActions {
  private readonly loginPage: LoginPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
  }

  async login(username: string, password: string): Promise<void> {
    await this.loginPage.open();
    await this.loginPage.enterUsername(username);
    await this.loginPage.enterPassword(password);
    await this.loginPage.clickLogin();
  }
}
