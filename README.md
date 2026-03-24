Project setup:

- Created package.json: npm init -y
- Installed latest version of WebDriverIO: npm init wdio@latest
- Installer Selections:
  - E2E testing
  - Local execution
  - Web testing
  - Chrome browser
  - Mocha framework
  - Spec reporter (for seeing results in the terminal)

- Installed allure-reporter locally: npm install @wdio/allure-reporter --save-dev
- Configured Allure in wdio.conf.js
- Installed dependency allure-commandline to generate report from test results: npm install -g allure-commandline --save-dev

- Created .gitignore to exclude:
node modules/
allure-results/
allure-report


Test Implementation:

- Created project structure (POM):
    - test/pageobjects
    - test/specs

- Implemented UC-1:
    E2E checkout flow:
    - Login
    - Add product to cart
    - Validate cart
    - Complete checkout
    - Verify success message

- Implemented UC-2:
    Data-driven login tests:
    - standard_user (positive scenario)
    - locked_out_user (negative scenario)

Configuration:

- Updated capabilities in wdio.conf.js to support Microsoft Edge browser
- Enabled parallel execution: maxInstances = 2