// JS is NOT closely tied to other languages, like JAVA,C#,C++
// We represent Objects as Functions in a FILE

var confirm_page = function() {
	
	//SET: function(value)
	this.getTitle = function() {
		//<div class="ng-scope" ng-controller="HelloController">
		//	<h1 id="title" class="title">Thank you</h1>
		return element(by.css('h1')).getText();
	};
	
	function AddNumbers(a,b){
		return a+b;
	};
	
};
// To be able to Export/Import as new instance
module.exports = new confirm_page();