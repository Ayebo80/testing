var Testrail = require('../conf/node_modules/testrail-api');

var testrail = new Testrail({
	host: 'https://ayebo.testrail.io',
	user: 'ayebo@gmx.de',
	password: 'ENYVQ3OeKTR24AmFPKLV-dZhWJt1X.sKLQl/QP.Ty'
});

var strErrorStack = "";
var strErrorStackSum = "";

// custom_reporter.js: https://jasmine.github.io/2.8/custom_reporter.html
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
      console.log('MESSAGE OF FAILED EXPECTATION NO.' + (i+1) + ': '  + result.failedExpectations[i].message);
	  console.log('ERROR STACK OF FAILED EXPECTATION NO.' + (i+1) + ': ' + result.failedExpectations[i].stack);
		
		//Cut the interesting part out of the Error Stack
		strErrorStack = result.failedExpectations[i].stack;
		var lines = strErrorStack.trim().split(/\s*[\r\n]+\s*/g);
		strErrorStackSum = strErrorStackSum + 'ERROR NO.' + (i+1) + ': ' + result.failedExpectations[i].message
		+ '\n' + lines[0] + ' ' + lines[1] + '\n';
    }
	console.log('ERROR STACK of ALL FAILED EXPECTATION(S):' + strErrorStackSum);
	
	// REPORT TO TESTRAIL
	if (result.failedExpectations.length > 0) {
		//status_id: 5: "failed", 1: "passed"	
		testrail.addResultsForCases(/*RUN_ID=*/1, /*CONTENT=*/{ "results": [{"case_id": 1, "status_id": 5,
		"comment": 'NUMBER OF PASSED EXPECTATION(S): ' + result.passedExpectations.length + '\n' +
		'NUMBER OF FAILED EXPECTATION(S): ' + result.failedExpectations.length + '\n' +
		strErrorStackSum }] }, function (err, results)
		{
			console.log("TC failed!!!!");
		});
	}

	if ((result.failedExpectations.length == 0) && (result.passedExpectations.length > 0)) {
		//status_id: 5: "failed", 1: "passed"	
		testrail.addResultsForCases(/*RUN_ID=*/1, /*CONTENT=*/{ "results": [{"case_id": 1, "status_id": 1, 
		"comment": 'NUMBER OF PASSED EXPECTATION(S): ' + result.passedExpectations.length }] }, function (err, results)
		{
			console.log("TC passed!!!!");
		});
	}
	
	  console.log('NUMBER OF FAILED EXPECTATION(S): ' + result.failedExpectations.length);
	  console.log('NUMBER OF PASSED EXPECTATION(S): ' + result.passedExpectations.length);
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


var util = require ('util')

describe ('To test the animal adoption flow', function() {
	
	beforeEach(function() {
		browser.get('http://www.thetestroom.com/jswebapp/index.html');
	});
	
	// //xit = IGNORE TEST
	// xit ('Should be able to adopt an animal', function() {
		// element(by.model('person.name')).sendKeys('I will subscribe');
		// var dynamicText = element(by.binding('person.name')).getText();
		// expect(dynamicText).toBe('I will subscribe');
		// element(by.buttonText('CONTINUE')).click();
		
		// //.$ = CSS-Invoker
		// element(by.model('animal')).$('[value="2"]').click();
		// element(by.buttonText('CONTINUE')).click();
		
		// var thankYouText = element(by.css('h1')).getText();
		// expect(thankYouText).toBe('Thank you');
	// });
	
	// Import and assign this file to value of home_page! Use with home_page.
	var home_page = require('../page/home_page.js');
	
	it ('Should be able to adopt an animal by page objects', function() {
		home_page.enterFieldValue('You will subscribe');
		var getHomePageText = home_page.getDynamicText();
		expect(getHomePageText).toBe('You will subscribe');
		
		var animal_page = home_page.clickContinue();
		animal_page.selectAnimal(2);
		
		var confirm_page = animal_page.clickContinue();
		expect(confirm_page.getTitle()).toBe('NOT Thank you');
	});
	
});