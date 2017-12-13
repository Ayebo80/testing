exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['../test/3.*.js'],
	
	suites: {
		smoke: '../test/smoke/*.js',
		longRunning: '../test/ratings/3.5.a.bunch.of.long.tests.spec.js',
		full: '../test/ratings/*.js',
		create: '../test/ratings/5.3.create.event.spec.js'
	}
	
    //onPrepare: e.g. Authorized Site -> User-Login
    // e.g. Browser Pos & Size
//    onPrepare: function(){
//        browser.driver.manage().window().setPosition(0,0);
//        browser.driver.manage().window().setSize(1280,720);
//    }
}