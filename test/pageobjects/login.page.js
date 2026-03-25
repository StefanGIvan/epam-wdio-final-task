class LoginPage {
    // Static elements on the SauceDemo login page
    get usernameInput() {
        return $('#user-name');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }

    //Error message displayed for invalid login scenarios
    get errorMessage() {
        return $('[data-test="error"]');
    }

    // Opens the SauceDemo login page
    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    // Login action for positive/negative test scenarios
    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();