describe ("Adopt an animal on the zoo test site", function() {
	
	it ("should able to adopt an animal", function() {
		browser.get("http://www.thetestroom.com/jswebapp");
		element(by.model("person.name")).sendKeys("Subscribe to my channel for more videos");
		element(by.binding("person.name")).getText().then(function(text){
			console.log(text);
		});
		element(by.buttonText("CONTINUE")).click();
	//CSS-Expressions are wrapped inside [] (boxed bracers)
		element(by.model("animal")).$('[value="1"]').click();
		element(by.partialButtonText("CONT")).click();
	});

});

// strictly speaking since this is JavaScript there really is no difference when using ' or ",
// they both mean the same thing. However when using together then this can create an issue. 
// When using together you must use them embedded in one another e.g. "hello 'world'".