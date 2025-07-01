# Creating a Test Framework from scratch
This is an end-to-end (E2E) test automation framework built using **Cypress**. It automates the user flow for applying to job postings on a web platform.

# Running the Tests
How to run the tests both in GUI and headless modes.

- Open Cypress Test Runner (GUI):
  npx cypress open
- Headless mode:
  npx cypress run

# Project Structure
├── cypress/
│ ├── e2e/ # Test specification files (e.g., .spec.js)
│ ├── fixtures/ # Test data like user info, job titles
│ ├── page_objects/ # Page Object Model files for encapsulating selectors & actions
│ └── support/ # Commands and Cypress setup files (e.g., e2e.js)
├── .gitignore # Ignores node_modules and other unnecessary files
├── cypress.config.js # Cypress configuration file
├── package.json # Project metadata and dependencies
├── package-lock.json # Auto-generated lockfile for consistent installs
└── README.md # Project documentation

# Test Cases Covered
- Filter job openings by team
- Select a specific job title
- Complete the application form