var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
    specs: ['specs/*spec.js'],
    baseUrl: 'http://172.21.10.83/',
    framework: 'jasmine2',

    allScriptsTimeout: 20000, // Waiting for Page Synchronization 20 seg
    getPageTimeout: 30000, //Waiting for Angular timeout 30 seg

    // add sauceUser and sauceKey to your system's env vars...
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    // seleniumAddress: 'http://localhost:4444/wd/hub',

    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'spec'}));
    },

    capabilities: {
        'name': 'welcome-page', // sauce labs job name
        'browserName': 'chrome',
        'platform': 'Windows 7',
        'version': '47.0',
        'tunnel-identifier': 'sample-app-tunnel'
    },

    jasmineNodeOpts: {
        isVerbose: true,
        includeStackTrace: true,
        showColors: true,
        defaultTimeoutInterval: 60000 // default 30 seg
    }
};