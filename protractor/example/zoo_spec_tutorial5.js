// AngularJS Protractor Tutorial 05 - Before and After
// In Console: 1 Expect = 1 Assertion, ASSERTION = VERYFICATION POINT
// HAPPY PATH = minimal amount of clicks needed to check if you are on right page
// BEFORE & AFTER METHODS when writing tests to make TEST MORE ROBUST & MANAGEABLE
// DESCRIBE BLOCK: RUN CERTAIN THINGS before TESTS (IT BLOCKS) run

describe ("Adopt an animal on the zoo test site", function() {
	
	// runs BEFORE EACH TEST RUN
	// beforeEach HAS to be contained inside a describe box
	beforeEach(function(){
		browser.get("http://www.thetestroom.com/jswebapp");
	});
	
	afterEach(function(){
		console.log("After method executed");
	});
	
	// TESTCASE 1
	it ("should able on correct page", function () {
		expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
	});
	
	// TESTCASE 2
	describe ("should generate correct text", function () {
		
		var textMessage;
		// beforeEach HAS to be contained inside a describe box
		beforeEach(function(){
			textMessage = "Subscribe to my channel for more videos";
		});
		
		// TEST: check correct text
		it ("should check correct text", function() {		
			element(by.model("person.name")).sendKeys(textMessage);
			element(by.binding("person.name")).getText().then(function(text){
				//console.log(text);
				//You DONT want to print out anything because it does not tell you anything, you want to assert it
				expect(text).toEqual("Subscribe to my channel for more videos");
			});
		});
		
/*		// TEST: check incorrect text
		it ("should check incorrect text", function() {		
			element(by.model("person.name")).sendKeys(textMessage);
			element(by.binding("person.name")).getText().then(function(text){
				//console.log(text);
				//You DONT want to print out anything because it does not tell you anything, you want to assert it
				expect(text).toEqual("Subscribe to my channel for more videos");
			});
		}); */
	});
	
	// TESTCASE 3
	describe ("should check the correct number of items in drop down", function() {
	
		var lengthOfItems;
		// beforeEach HAS to be contained inside a describe box
		beforeEach(function(){
			lengthOfItems = 4;
		});
		
		it ("should check number of items", function() {
			element(by.buttonText("CONTINUE")).click();
			// $ to invoke CSS
			element(by.model("animal")).$("[value='1']").click();
		
			//element.all returns us an Array, can be 0,1 or more then 1
			//represent an CSS Element is .<CLASSNAME>
			//.ng-pristine option looks for any child node which belong to the parent node
			element.all(by.css(".ng-pristine option")).then(function(items) {
				expect(items.length).toBe(lengthOfItems);
				expect(items[1].getText()).toBe("George the Turtle");
			});
		
			element(by.buttonText("CONTINUE")).click();
		
		});
	});
	
	// TESTCASE 4
	it ("should check the correct number of items in drop down", function() {
		element(by.buttonText("CONTINUE")).click();
		element(by.buttonText("CONTINUE")).click();
		expect(browser.getCurrentUrl()).toContain("confirm");
	});
});