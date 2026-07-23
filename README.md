# Telnyx Cypress Automation Tests


## Overview

This project contains automated end-to-end tests for https://telnyx.com using Cypress.

The goal of this project is to verify the main functionality of the Telnyx website, including navigation, header/footer elements, pricing page, authentication links, and responsive mobile behavior.


## Tech Stack

- Cypress
- JavaScript
- Node.js
- Page Object Model (POM)
- GitHub Actions
- Cypress Cloud Dashboard


## Project Structure
```text
cypress/
│
├── e2e/
│ └── telnyx.cy.js
│
├── pages/
│ ├── HomePage.js
│ ├── PricingPage.js
│ ├── LoginPage.js
│ └── SignUpPage.js
│
├── fixtures/
│
└── support/
  ├── commands.js
  └── e2e.js

.github/
  └── workflows/
    └── cypress.yml

cypress.config.js

package.json

package-lock.json
```

## Test Scenarios

The following test cases were automated:

| ID | Test Scenario |
|----|--------------|
| TC-001 | Verify Home page loads successfully |
| TC-002 | Verify company logo is displayed and clickable |
| TC-003 | Verify header elements are displayed |
| TC-004 | Verify "Sign up" button is displayed and clickable |
| TC-005 | Verify "Log in" button is displayed and clickable |
| TC-006 | Verify Pricing page is opened |
| TC-007 | Verify footer elements are displayed |
| TC-008 | Verify mobile navigation menu |
| TC-009 | Verify social media icons and links correctness |
| TC-010 | Verify page title |


## Framework Design

The project follows the Page Object Model pattern.


### Page Objects

Locators and page actions are separated from test cases.

Example:

```javascript
getPricingMenu() {
    return cy.contains('button', 'Pricing')
}

clickPricingMenu() {
    this.getPricingMenu().click()
}
```
Benefits:

- Improved test readability
- Easier maintenance
- Reusable page methods
- Separation between test logic and selectors


## Installation

Clone repository:

- git clone <repository-url>

Install dependencies:

- npm install


## Running Tests

Open Cypress Test Runner:

- npx cypress open

Run tests in headless mode:

- npx cypress run --browser chrome


## Cypress Cloud Reporting

Test execution results are uploaded to Cypress Cloud Dashboard.

The project uses Cypress recording:

cypress run --record

The dashboard provides:

- Test execution history
- Failed test screenshots
- Test run reports
- CI execution results


## CI/CD Pipeline

GitHub Actions is configured to automatically run Cypress tests after push request event.

Pipeline flow:
```text
GitHub Push
      |
      |
GitHub Actions
      |
      |
Install dependencies
      |
      |
Run Cypress tests
      |
      |
Upload results to Cypress Cloud
```

## Known issues

The Telnyx login page uses Cloudflare Turnstile protection.
Cross-origin behavior is handled using Cypress `cy.origin()`.