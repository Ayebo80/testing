exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../test/create.event.js'],

    //onPrepare: e.g. Authorized Site -> User-Login
    // e.g. Browser Pos & Size
    onPrepare: function(){
        browser.driver.manage().window().setPosition(0,0);
        browser.driver.manage().window().setSize(1280,720);
    }
}