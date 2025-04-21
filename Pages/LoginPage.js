// pages/LoginPage.js
exports.LoginPage = class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = page.locator('input[name="email"]');
      this.passwordInput = page.locator('input[name="password"]');
      this.loginButton = page.locator('input[type="submit"]');
    }
  
    async goto() {
      await this.page.goto('https://gtest.c2btech.com/admin/signin');
    }
  
    async login(username, password) {
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }
  };