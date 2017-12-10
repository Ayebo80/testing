describe('Creating New Event', function(){
    describe('When clicking on an event', function(){
        it('Should route to new event page', function(){
            //Get: Protractor-FW: when you do get => Protractor waits for Angular
            //browser.get('http://localhost:3000/#!/EventRatings');
			browser.get('http://www.thetestroom.com/jswebapp/index.html');
			
			element(by.buttonText('CONTINUE')).click();
			
			expect(browser.getCurrentUrl()).toMatch('http://www.thetestroom.com/jswebapp/animalselection.html');
			
        });
    });
});