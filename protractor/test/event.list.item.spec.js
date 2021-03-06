describe('Event List Details: ', function(){
    describe('When clicking on an event', function(){
        it('Should navigate to the details page', function(){
            //Get: Protractor-FW: when you do get => Protractor waits for Angular
            browser.get('http://localhost:3000/#!/EventRatings');
			//browser.get('http://www.thetestroom.com/jswebapp/index.html');
			
			
            var firstElement = element.all(by.binding('name')).first();
			//var dynamicText = element(by.binding('person.name')).getText();
			
            firstElement.getText().then(function(text){
                name = text;
            });
            
            //Click: => Protractor DONT wait for Angular
            firstElement.click();
            //Wait: wait for Ressource Request out on API, Client-Side Rendering
            browser.waitForAngular();
			
            var header = element(by.binding('name'));
			
            //Jasmine: pass in a Promise (getText()) into Jasmine, Jasmin waits for Promise to resolve, before it moves on to toMatch()
            expect(header.getText()).toMatch('Jazz On The Green');
        });
    });
});