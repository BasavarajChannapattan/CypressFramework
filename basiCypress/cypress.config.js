const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  projectId: "zfc17k",
  reporter: "cypress-mochawesome-reporter",
  env: {
    url: "https://rahulshettyacademy.com",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "Cypress/e2e/*.js",
  },
});
