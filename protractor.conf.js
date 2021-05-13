module.exports.config = {
    //allScriptsTimeout: 30000,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName':'chrome',
    },
    specs:['specs/*.spec.js'],
    baseUrl: 'https://demoqa.com/automation-practice-form',
    onPrepare: () => {
        browser.waitForAngularEnabled(false),
        browser.driver.manage().window().maximize()
    },
};