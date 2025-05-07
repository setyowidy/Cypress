const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ita87c',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
