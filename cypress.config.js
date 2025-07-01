const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
    baseUrl: 'https://jobs.lever.co/bluecoding',
    viewportWidth: 1400,
    viewportHeight: 1200,
  },
});
