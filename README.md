# EPAM WebDriverIO Final Task

This project contains automated end-to-end tests for the SauceDemo website using WebDriverIO, Mocha, JavaScript and Allure reporting.

## Application Under Test
https://www.saucedemo.com/

## Project Setup
- Created `package.json`: 
    - `npm init -y`

- Installed latest version of WebDriverIO: 
    - `npm init wdio@latest`

- Selected during WebDriverIO setup:
  - E2E testing
  - Local execution
  - Web testing
  - Chrome browser
  - Mocha framework
  - Spec reporter (for terminal output)

- Installed Allure Reporter locally: 
    - `npm install @wdio/allure-reporter --save-dev`

- Configured Allure in `wdio.conf.js`

- Installed Allure command line tool to generate report from test results: 
    - `npm install -g allure-commandline`

- Created `.gitignore` to exclude:
    - `node_modules/`
    - `allure-results/`
    - `allure-report/`


## Test Implementation

### Project Structure (POM)
    - `test/pageobjects`
    - `test/specs`

### UC-1 Checkout Flow
   Implemented E2E checkout flow:
    - Login with `standard_user`
    - Add product to cart
    - Validate product in cart
    - Proceed to checkout
    - Fill in checkout information
    - Complete the order
    - Verify success message

### UC-2 Data-Driven Login
  Implemented Data-driven login tests for:
    - `standard_user` (positive scenario)
    - `locked_out_user` (negative scenario)

## Configuration
- Updated capabilities in `wdio.conf.js` to support:
    - Chrome
    - Microsoft Edge

- Enabled parallel execution: 
    - `maxInstances = 2`

## Features
- E2E checkout flow validation
- Data-driven login testing
- Page Object Model structure
- Cross-browser execution (Chrome/Edge)
- Parallel test execution
- Allure reporting

## How to install dependencies
- `npm install`

## How to run tests
- `npx wdio run wdio.conf.js`

## How to generate/open Allure report
allure generate allure-results --clean -o allure-report
allure open allure-report
