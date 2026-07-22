const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://telnyx.com",
    watchForFileChanges: false,
    viewportWidth: 1440,
    viewportHeight: 900,
    video: false,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});