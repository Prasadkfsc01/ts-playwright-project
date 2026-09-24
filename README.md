# Playwright TypeScript UI Automation Framework

A lightweight and scalable **UI test automation framework built with Playwright and TypeScript**, using the OrangeHRM demo application. The framework follows the **Page Object Model with an Actions layer** to separate test scenarios, reusable workflows, UI interactions, test data and configuration. It supports smoke testing, environment-based configuration, secure credential handling, Playwright reporting and GitHub Actions CI execution.

## Tools & Technologies

- Playwright
- TypeScript
- Node.js
- Page Object Model
- Git / GitHub
- GitHub Actions
- Playwright HTML Reporter
- Playwright Trace Viewer
- VS Code

## Framework Architecture

```text
                    Test Scenarios
                          |
                          v
                       Actions
                          |
                          v
                     Page Objects
                          |
                          v
                      Playwright
                          |
                          v
                       Browser
                          |
                          v
                     Application
```

The framework separates responsibilities across the following layers:

- **Tests** – contain test scenarios and assertions.
- **Actions** – contain reusable user and business workflows.
- **Page Objects** – contain locators and page-specific interactions.
- **Test Data** – manages reusable test inputs.
- **Utilities** – contains generic reusable helper functions.
- **Configuration** – controls environment settings, browser execution, reporting and test behaviour.

## Project Structure

```text
ts-playwright-project/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── .vscode/
│   ├── extensions.json
│   └── settings.json
│
├── src/
│   ├── actions/
│   │   ├── loginActions.ts
│   │   └── recruitmentActions.ts
│   │
│   ├── pages/
│   │   ├── login.po.ts
│   │   └── recruitment.po.ts
│   │
│   ├── testdata/
│   │   └── credentials.ts
│   │
│   ├── tests/
│   │   ├── login.spec.ts
│   │   └── recruitment.spec.ts
│   │
│   └── utils/
│       └── helper.ts
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

## Environment Configuration

Create a local `.env` file in the project root using `.env.example` as the template:

```env
BASE_URL=
TEST_USERNAME=
TEST_PASSWORD=
```

The `.env` file is excluded from source control.

For GitHub Actions, non-sensitive configuration is stored using **GitHub Variables**:

```text
BASE_URL
TEST_USERNAME
```

Sensitive credentials are stored using **GitHub Secrets**:

```text
TEST_PASSWORD
```

This keeps environment-specific configuration and sensitive credentials outside the source code.

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Prasadkfsc01/ts-playwright-project.git
cd ts-playwright-project

npm ci
npx playwright install chromium
```

## Running Tests

Run the full test suite:

```bash
npm test
```

Run smoke tests:

```bash
npm run test:smoke
```

Run tests in headed mode:

```bash
npm run test:headed
```

Run Playwright UI Mode:

```bash
npm run test:ui
```

Open the latest Playwright report:

```bash
npm run report
```

Run TypeScript validation:

```bash
npm run typecheck
```

## Reporting & Failure Evidence

Playwright HTML reporting is used to provide visibility into test execution results.

When a test fails, the framework can retain:

- Screenshot
- Video
- Playwright trace
- Error details
- HTML report

Test evidence is generated under:

```text
test-results/
```

HTML reports are generated under:

```text
playwright-report/
```

View the latest report with:

```bash
npm run report
```

## CI/CD

GitHub Actions is used to automatically run the Playwright smoke test suite when changes are pushed to `main`, when pull requests target `main`, or when the workflow is triggered manually.

The pipeline checks out the source code, sets up Node.js, installs project dependencies and Playwright Chromium, performs TypeScript validation, runs the `@smoke` test suite, and publishes Playwright reports and failure evidence such as screenshots, videos, traces and error details.

GitHub Actions uses repository configuration for environment-specific values. `BASE_URL` and `TEST_USERNAME` are stored as GitHub Variables, while `TEST_PASSWORD` is stored securely as a GitHub Secret.

This keeps environment configuration and sensitive credentials outside the source code while allowing the same test suite to run consistently in CI.
