describe('Adding a new event', function(){
	var button,
	  css;
	
	//BeforeEach: Setup System under test
	beforeEach(function(){
		//Get: Protractor-FW: when you do get => Protractor waits for Angular
		//browser.get('http://localhost:3000/#!/EventRatings');
		browser.get('http://www.thetestroom.com/jswebapp/index.html');
		button = element(by.buttonText('CONTINUE'));
	});
	
//    describe('When the form is empty', function(){
//        it('Should disable the Create button', function(){
            //Get: Protractor-FW: when you do get => Protractor waits for Angular
            //browser.get('http://localhost:3000/#!/EventRatings');
						
//			var css = button.getAttribute('class');
			
			//console.log(css.isSelected)
//			expect(css).toMatch('disabled');
//        });
//    });
	
    describe('When the form is empty', function(){
        it('Should disable the Create button', function(){
            //Get: Protractor-FW: when you do get => Protractor waits for Angular
            //browser.get('http://localhost:3000/#!/EventRatings');
			element(by.model('person.name')).sendKeys('A Sample Event');
			
			var css = button.getAttribute('class');
			
			//console.log(css.isSelected)
			expect(css).not.toMatch('enabled');
        });
    });
	
});