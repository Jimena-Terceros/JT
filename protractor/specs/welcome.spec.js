'use strict';

var WelcomePage = require('../pages/welcome.page.js');

describe('Welcome page', () => {

    it('should display title of the page', (done) => {
        WelcomePage.goToPage()
            .then(() => WelcomePage.getTitle())
            .then(title => {
            expect(title).toBe('Hello World App');
            done();
            });
    });

    it('should display message of the page', (done) => {
        WelcomePage.goToPage()
            .then(() => WelcomePage.getMessage())
            .then(message => {
                expect(message).toBe('Welcome Jimena!');
                done();
            });
    });

});