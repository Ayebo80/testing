// PageObjectPattern: 
// A PageObject is a representation of a Page
// Methods inside PageObject are used to get Information of Page

describe ("Testing the JavaScript zoo site", function() {
	
	beforeEach(function() {
		browser.get("http://www.thetestroom.com/jswebapp/index.html");
	});
	
	it ('Should be able to adopt an animal', function() {
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

});