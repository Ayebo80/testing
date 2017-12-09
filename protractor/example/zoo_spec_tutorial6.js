// AngularJS Protractor Tutorial 05 - Before and After
// In Console: 1 Expect = 1 Assertion, ASSERTION = VERYFICATION POINT
// HAPPY PATH = minimal amount of clicks needed to check if you are on right page
// BEFORE & AFTER METHODS when writing tests to make TEST MORE ROBUST & MANAGEABLE
// DESCRIBE BLOCK: RUN CERTAIN THINGS before TESTS (IT BLOCKS) run

describe ("Testing the JavaScript zoo site", function() {
	
	beforeEach(function() {
		browser.get("http://www.thetestroom.com/jswebapp/index.html");
	});
	
	it ("should test by using CSS expression", function() {
		// css tag
		// lement(by.css) : Invokes the CSS-Locator
		element(by.css('input')).sendKeys("text test");
		
		// css class
		// element(by.css('.ng-binding')): Invoke CSS-Class by Dot-Operator(.)
		element(by.css('.ng-binding')).getText().then(function(text) {
			console.log(text);
		});
		
		// css ids
		// Identify ID: Hash-Symbol followed by ID #continue_button
		element(by.css('#continue_button')).click();
		
		// css chaining: pass in multiple arguments
		element(by.css('button#continue_button')).click();
		// find element by Tag button & then same Tag has Attribut of Value ID#
		
		// css chain child nodes: Find type table, look all child nodes of type td, then look all nodes of type a
		// if you find first a do something with it
		element(by.css('table td a')).getText().then(function(text) {
			console.log(text);
		});
		
		// css attributes
		// [attribute="value"]
		element(by.css('[id="title"]')).getText().then(function(text) {
			console.log(text);
		});
		
		// css combination
		element(by.css('h1[id="title"]')).getText().then(function(text) {
			console.log(text);		
		
	});

});