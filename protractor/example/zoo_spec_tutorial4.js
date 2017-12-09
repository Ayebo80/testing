// AngularJS Protractor Tutorial 04 - Using Expects
// In Console: 1 Expect = 1 Assertion, ASSERTION = VERYFICATION POINT
// HAPPY PATH = minimal amount of clicks needed to check if you are on right page
// BEFORE & AFTER METHODS when writing tests to make TEST MORE ROBUST & MANAGEABLE

describe ("Adopt an animal on the zoo test site", function() {
	
	// TESTCASE 1
	it ("should able on correct page", function () {
		browser.get("http://www.thetestroom.com/jswebapp");
		// In Console: 1 Expect = 1 Assertion
		// In Console: Ist ein Expect NICHT erfolgreich = 1 Assertion + 1 Failure
//		expect("test string").toContain("test");
//		expect("test string").toContain("testt");
		expect(browser.getCurrentUrl()).toContain("jswebapp");
		expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
	});
	
	// TESTCASE 2
	it ("should generate correct text", function () {
		browser.get("http://www.thetestroom.com/jswebapp");
		var textMessage = "Subscribe to my channel for more videos";
		
		element(by.model("person.name")).sendKeys(textMessage);
		element(by.binding("person.name")).getText().then(function(text){
			//console.log(text);
			//You DONT want to print out anything because it does not tell you anything, you want to assert it
			expect(text).toEqual("Subscribe to my channel for more videos");
		});
	});
	
	// TESTCASE 3
	it ("should check the correct number of items in drop down", function() {
		browser.get("http://www.thetestroom.com/jswebapp");
		element(by.buttonText("CONTINUE")).click();
		// $ to invoke CSS
		element(by.model("animal")).$("[value='1']").click();
		
		//element.all returns us an Array, can be 0,1 or more then 1
		//represent an CSS Element is .<CLASSNAME>
		//.ng-pristine option looks for any child node which belong to the parent node
		element.all(by.css(".ng-pristine option")).then(function(items) {
			expect(items.length).toBe(4);
			expect(items[1].getText()).toBe("George the Turtle");
		});
		
		element(by.buttonText("CONTINUE")).click();
	});
	
	// TESTCASE 4
	it ("should check the correct number of items in drop down", function() {
		browser.get("http://www.thetestroom.com/jswebapp");
		element(by.buttonText("CONTINUE")).click();
		element(by.buttonText("CONTINUE")).click();
		expect(browser.getCurrentUrl()).toContain("confirm");
	});
	
});