describe('My long tests', function(){
	//BeforeEach: Setup System under test
	beforeEach(function(){
		//Get: Protractor-FW: when you do get => Protractor waits for Angular
		//browser.get('http://localhost:3000/#!/EventRatings/');
		browser.get('http://www.thetestroom.com/jswebapp/index.html');
		browser.driver.sleep(10000);
	});
	
	it('Should check some data', function(){
		expect(true).toBeTruthy();
	});
	
	it('Should check some more data', function(){
		expect(false).toBeFalsy();
	});

});