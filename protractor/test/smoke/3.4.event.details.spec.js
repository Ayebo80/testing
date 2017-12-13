describe('Event Details', function(){
    describe('Ratings Block', function(){
		
		//BeforeEach: Setup System under test
		beforeEach(function(){
			//Get: Protractor-FW: when you do get => Protractor waits for Angular
			//browser.get('http://localhost:3000/#!/EventRatings/540d090f92ce4386636a3069');
			browser.get('http://www.thetestroom.com/jswebapp/animalselection.html');
		});
		
		it('Should show all ratings', function(){
			//var ratings = element.all(by.repeater('r in eventDetails.ratings'));
			var ratings = element.all(by.repeater('animal in animals'));
			
            expect(ratings.count()).toBe(0);
			//console.log(ratings.count());
			
			//console.log(css.isSelected)
			
        });

//		it('Should have a description', function(){
//			var descriptions = element.all(by.repeater('r in eventDetails.ratings').column('description'));
//			
//            expect(descriptions.getText()).toMatch('Waste of time');
//        });


    });
});