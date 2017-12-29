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
	



var customMatchers = {
  toBeGoofy: function(util, customEqualityTesters) {
    return {
      compare: function(actual, expected) {
        if (expected === undefined) {
          expected = '';
        }
        var result = {};
        result.pass = util.equals(actual.hyuk, "gawrsh" + expected, customEqualityTesters);
        if (result.pass) {
           result.message = "Expected " + actual + " not to be quite so goofy";
        } else { 
          result.message = "Expected " + actual + " to be goofy, but it was not very goofy";
        }  
        return result;
      }
    };
  }
};


describe ('To test the animal adoption flow', function() {
	
	beforeEach(function() {
		browser.get('http://www.thetestroom.com/jswebapp/index.html');
		jasmine.addMatchers(customMatchers);
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
		//home_page.enterFieldValue('You will subscribe');
		element(by.model('person.name')).sendKeys('DDDDDYou will subscribe');
		var getHomePageText = home_page.getDynamicText();
//		console.log(element(by.binding('person.name')).getText());
//		expect(getHomePageText).toBe('You will subscribe');
		expect(element(by.binding('person.name')).getText()).toBe('You will subscribe');

		
		
		// if( element(by.binding('person.name')).getText() == 'You will subscribe' ) {
			// console.log('in if');
		// }else {
			// console.log('in else');
		// }
		
		// expect(getHomePageText).toBe('You will subscribe').then(function (toBe) {
			// if (toBe) {
			  // // do smth
			  // console.log('toBe=true');
			// } else {
			  // // do smth else
			  // console.log('toBe=false');
			// }
		// });
		
		// .then(function(result) {
			// if(result){
				// console.log('result=true');
			// }else {
				// console.log('result=false');
			// }
		// });
				
		var animal_page = home_page.clickContinue();
				
		animal_page.selectAnimal(2);
		var confirm_page = animal_page.clickContinue();
		//no_error_occured = expect(confirm_page.getTitle()).toBe('Thank you');
		
		//var v2 = home_page.AddNumbers(1,2);
		//console.log(v2);
		
		//status_id: 5: "failed", 1: "passed"	
		// if (result == )
		
//		testrail.addResultsForCases(/*RUN_ID=*/1, /*CONTENT=*/{ "results": [{"case_id": 1, "status_id": 1, "comment": "test auf Samsung J3 erfolgreich" }] }, function (err, results)
//		{
//			console.log("TC-1 Geschrieben!!!!");
//		});
		
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
		

