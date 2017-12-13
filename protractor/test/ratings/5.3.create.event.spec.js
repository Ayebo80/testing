// PAGE OBJECT CreatePage();
var CreatePage = require('../pages/create.event.page.js'),
    ListPage = require('../pages/create.event.page.js');

describe('Adding a new event', function(){
	var button,
	  css,
	  //PAGE OBJECT CreatePage();
	  createPage = new CreatePage();
	
	//BeforeEach: Setup System under test
	beforeEach(function(){
		//Get: Protractor-FW: when you do get => Protractor waits for Angular
		//browser.get('http://localhost:3000/#!/EventRatings');
		browser.get('http://www.thetestroom.com/jswebapp/index.html');
		
		//button = element(by.buttonText('CONTINUE'));
		//PAGE OBJECT
		button = createPage.button();
	});
	
//    describe('When the form is empty', function(){
//        it('Should disable the Create button', function(){
			
//			var css = button.getAttribute('class');
			//console.log(css.isSelected)
//			expect(css).toMatch('disabled');
//        });
//    });
	
    describe('When specifying the name', function(){
        it('Should enable the Create button', function(){
			//Page Object CreatePage: createPage.name INSTEAD of inputbox.element(by.model)
			createPage.name.sendKeys('A Sample Event');
			
			//PAGE OBJECT: createPage.getButtonClasses() INSTEAD of button.getAttribute('class');
			//var css = button.getAttribute('class');
			var css = createPage.getButtonClasses();
			//console.log(css.isSelected)
			expect(css).not.toMatch('disabled');
        });
    });
	
	describe('When the name is too short', function(){
        it('Should disable the Create button', function(){
			//Page Object CreatePage: createPage.name INSTEAD of inputbox.element(by.model)
			createPage.name.sendKeys('ABC');
			
			//PAGE OBJECT: createPage.getButtonClasses() INSTEAD of button.getAttribute('class');
			//var css = button.getAttribute('class');
			var css = createPage.getButtonClasses();
			//console.log(css.isSelected)
			expect(css).toMatch('disabled');
        });
    });
	
	describe('When the name is too long', function(){
        it('Should disable the Create button', function(){
			//Page Object CreatePage: createPage.name INSTEAD of inputbox.element(by.model)
			createPage.name.sendKeys('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz');
			
			//PAGE OBJECT: createPage.getButtonClasses() INSTEAD of button.getAttribute('class');
			//var css = button.getAttribute('class');
			var css = createPage.getButtonClasses();
			//console.log(css.isSelected)
			expect(css).toMatch('disabled');
        });
    });	

});