// JS is NOT closely tied to other languages, like JAVA,C#,C++
// We represent Objects as Functions in a FILE
require ('../page/confirm_page.js');

var animal_page = function() {
	
	//SET: function(value)
	this.selectAnimal = function(index) {
		//ng-model="person.name" => by.model
		//find dropdown by model, click on value and pass value
		element(by.model('animal')).$('[value="' + index + '"]').click()
	};
	
	this.clickContinue = function() {
		element(by.buttonText('CONTINUE')).click();
		return require('./confirm_page.js');
	};
	
	function AddNumbers(a,b){
		return a+b;
	};
	
};
// To be able to Export/Import as new instance
module.exports = new animal_page();

//RULES for POP
//When we invoke a method, method only resides on page & does NOT return anything
//Click on link needs to return a REFERENCE to new page object