//As replied in Part 3 of this video series: Hey Waheed, strictly speaking since this is JavaScript there really is no difference when 
//using ' or ", they both mean the same thing. However when using together then this can create an issue. When using together you must 
//use them embedded in one another e.g. "hello 'world'". I hope this answers your question.

// ADVANTAGES using Page Objects
// 1) Maintaining becomes easier
// 2) Easier to write & manage tests (duplication will reduce)

var util = require ('util')

describe ('To test the animal adoption flow', function() {
	
	beforeEach(function() {
		browser.get('http://www.thetestroom.com/jswebapp/index.html');
	});
	
	//xit = IGNORE TEST
	xit ('Should be able to adopt an animal', function() {
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

	// Import and assign this file to value of home_page! Use with home_page.
	var home_page = require('../page/home_page.js');
	
	it ('Should be able to adopt an animal by page objects', function() {
		home_page.enterFieldValue('You will subscribe');
		var getHomePageText = home_page.getDynamicText();
		expect(getHomePageText).toBe('You will subscribe');
		var animal_page = home_page.clickContinue();
		console.log('Page 1: home_page done');
		
		animal_page.selectAnimal(2);
		var confirm_page = animal_page.clickContinue();
		console.log('Page 2: animal_page done');
		
		expect(confirm_page.getTitle()).toBe('Thank you');
		console.log('Page 3: confirm_page done');
		
		var v2 = home_page.AddNumbers(1,2);
		console.log(v2);
	});
});