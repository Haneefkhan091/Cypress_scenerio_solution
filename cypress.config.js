// const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
module.exports = defineConfig({
  projectId: "ruygiz",
  watchForFileChanges: false,
  pageLoadTimeout: 600000,
  experimentalStudio: true,
  defaultCommandTimeout: 50000,
  viewportWidth: 1440,
  viewportHeight: 900,
  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  reporter: "cypress-mochawesome-reporter",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", { downloadFile });
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    // baseUrl: "https://imaratresidences.com/",
    includeShadowDom: true,
    experimentalRunAllSpecs: true,
    testIsolation: false,
  },
});
