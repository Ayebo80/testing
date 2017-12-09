// JS is NOT closely tied to other languages, like JAVA,C#,C++
// We represent Objects as Functions in a FILE

require ('../page/animal_page.js');

var home_page = function() {
	
	//SET: function(value)
	this.enterFieldValue = function(value) {
		//ng-model="person.name" => by.model
		element(by.model('person.name')).sendKeys(value);
	};
	
	//GET: return
	this.getDynamicText = function() {
		//ng-bind="person.name" => by.binding
		return element(by.binding('person.name')).getText();
	};
	
	this.clickContinue = function() {
		element(by.buttonText('CONTINUE')).click();
		//POM: Click on link NEEDS to return a REFERENCE to new page object
		return require('./animal_page.js');
	};
	
	this.AddNumbers = function(a,b) {
		return a+b;
	};
	
};
// To be able to Export/Import as new instance
module.exports = new home_page();