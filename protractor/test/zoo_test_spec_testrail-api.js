var util = require ('util')

var Testrail = require('../conf/node_modules/testrail-api');

var testrail = new Testrail({
	host: 'https://ayebo.testrail.io',
	user: 'ayebo@gmx.de',
	password: 'ENYVQ3OeKTR24AmFPKLV-dZhWJt1X.sKLQl/QP.Ty'
});

describe ('To test the animal adoption flow', function() {
	
	beforeEach(function() {
		browser.get('http://www.thetestroom.com/jswebapp/index.html');
	});
	
	//xit = IGNORE TEST
/*	xit ('Should be able to adopt an animal', function() {
		element(by.model('person.name')).sendKeys('I will subscribe');
		var dynamicText = element(by.binding('person.name')).getText();
		expect(dynamicText).toBe('I will subscribe');
		element(by.buttonText('CONTINUE')).click();
		
		//.$ = CSS-Invoker
		element(by.model('animal')).$('[value="2"]').click();
		element(by.buttonText('CONTINUE')).click();
		
		var thankYouText = element(by.css('h1')).getText();
		expect(thankYouText).toBe('Thank you');
	});
	*/
	
	// Import and assign this file to value of home_page! Use with home_page.
	var home_page = require('../page/home_page.js');
	
	it ('Should be able to adopt an animal by page objects', function() {
		home_page.enterFieldValue('You will subscribe');
		var getHomePageText = home_page.getDynamicText();
		expect(getHomePageText).toBe('You will subscribe');
		
		var animal_page = home_page.clickContinue();
		
		animal_page.selectAnimal(2);
		var confirm_page = animal_page.clickContinue();
		
		//status_id: 5: "failed", 1: "passed"	
		testrail.addResultsForCases(/*RUN_ID=*/1, /*CONTENT=*/{ "results": [{"case_id": 1, "status_id": 5, "comment": "test failed" }] }, function (err, results)
		{
			console.log("TC-1 Geschrieben!!!!");
		});
	});
});