const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://juice-shop-sanitarskyi.herokuapp.com',
        watchForFileChanges: false,
        retries: 1,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        }
    }
})
