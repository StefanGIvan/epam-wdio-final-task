const LoginPage = require('../pageobjects/login.page');

describe('UC-2 Data-Driven Login Validation', () => {
    const users = [
        {
            username: 'standard_user',
            password: 'secret_sauce',
            shouldPass: true
        },
        {
            username: 'locked_out_user',
            password: 'secret_sauce',
            shouldPass: false
        }
    ];

    users.forEach(({username, password, shouldPass}) => {
        it(shouldPass
            ? `should allow ${username} to log in successfully`
            : `should display an error message for ${username}`, async () => {
            await LoginPage.open();
            await LoginPage.login(username, password);

            if(shouldPass) {
                await expect(browser).toHaveUrl(expect.stringContaining('/inventory.html'));
            } else {
                await expect(LoginPage.errorMessage).toBeDisplayed();
                await expect(LoginPage.errorMessage).toHaveText(
                    'Epic sadface: Sorry, this user has been locked out.'
                );
            }
        });
    });
});