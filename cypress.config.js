const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hn1ccn",
  e2e: {
    baseUrl: "https://telnyx.com",
    watchForFileChanges: false,
    viewportWidth: 1440,
    viewportHeight: 900,
    video: !!process.env.CI,
    screenshotOnRunFailure: !!process.env.CI,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});