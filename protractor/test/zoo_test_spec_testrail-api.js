var util = require ('util')

var Testrail = require('../conf/node_modules/testrail-api');

var testrail = new Testrail({
	host: 'https://ayebo.testrail.io',
	user: 'ayebo@gmx.de',
	password: 'ENYVQ3OeKTR24AmFPKLV-dZhWJt1X.sKLQl/QP.Ty'
});
	
//status_id: 5: "failed", 1: "passed"	
//		testrail.addResultsForCases(/*RUN_ID=*/1, /*CONTENT=*/{ "results": [{"case_id": 1, "status_id": 5, "comment": "this test has failed in protractor" }] }, function (err, results)
//		{
//			console.log("TC-1 Geschrieben!!!!");
//		});
	

var myReporter = {

  jasmineStarted: function(suiteInfo) {
    console.log('Running suite with ' + suiteInfo.totalSpecsDefined);
  },

  suiteStarted: function(result) {
    console.log('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
  },

  specStarted: function(result) {
    console.log('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
  },

  specDone: function(result) {
    console.log('Spec: ' + result.description + ' was ' + result.status);
    for(var i = 0; i < result.failedExpectations.length; i++) {
      console.log('Failure: ' + result.failedExpectations[i].message);
      console.log(result.failedExpectations[i].stack);
    }
	  console.log(result.passedExpectations.length);
  },
  
  //suiteDone is invoked when all of the child specs and suites for a given suite have been run
  suiteDone: function(result) {
    console.log('Suite: ' + result.description + ' was ' + result.status);
    for(var i = 0; i < result.failedExpectations.length; i++) {
      console.log('AfterAll ' + result.failedExpectations[i].message);
      console.log(result.failedExpectations[i].stack);
    }
  },
  
  jasmineDone: function() {
    console.log('Finished suite');
  }
};

jasmine.getEnv().addReporter(myReporter);



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
		home_page.enterFieldValue('DDDDDDDDYou will subscribe');
		var getHomePageText = home_page.getDynamicText();
		expect(getHomePageText).toBe('You will subscribe');
		
		if (getHomePageText == 'You will subscribe') {
			console.log('you will subscribe');
		}
		
		var animal_page = home_page.clickContinue();
		console.log('Page 1: home_page done');
		
		animal_page.selectAnimal(2);
		var confirm_page = animal_page.clickContinue();
		console.log('Page 2: animal_page done');
		
		//no_error_occured = expect(confirm_page.getTitle()).toBe('Thank you');
		console.log('Page 3: confirm_page done');
		
		//var v2 = home_page.AddNumbers(1,2);
		//console.log(v2);
		
		//status_id: 5: "failed", 1: "passed"	
		testrail.addResultsForCases(/*RUN_ID=*/1, /*CONTENT=*/{ "results": [{"case_id": 1, "status_id": 5, "comment": "für martin test" }] }, function (err, results)
		{
			console.log("TC-1 Geschrieben!!!!");
		});
		
	});
	
	//"status_name":(jasmine.results.spec.failedExpectations.length === 0 ? "passed" : "failed")
	
//    afterEach(function(){
		
		//jasmine.getEnv().addReporter(new function() {
//			this.suiteDone = function(result) {
				//if (result.failedExpectations.length > 0) {
				// Test FAILURE ACTION GOES HERE
//				}
//			};
//	});
//    });
	
});
		

