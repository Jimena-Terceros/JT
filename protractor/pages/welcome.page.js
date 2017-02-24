'use strict';

function WelcomePage() {
    this.headerTitle = element(by.id('header-title'));
    this.message = element(by.id('message'));

}

WelcomePage.prototype.goToPage = function () {
    return browser.get('/', 3000);
};

WelcomePage.prototype.getTitle = function() {
    return this.headerTitle.getText();
};

WelcomePage.prototype.getMessage= function() {
    return this.message.getText();
};

module.exports = new WelcomePage();