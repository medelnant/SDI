// Author: Michael S. Edelnant
// School: Full Sail University
// Course: SDI 1211
// Instructor: Lee Lewis
// --------------------------------------------------------------------------- /
// Project 4
// Flow Chart: 
// Due Date: 11/15/2012
// --------------------------------------------------------------------------- /
// Libaries & Utility Functions

var utilityLibrary = function() {

/* ###################################################
Strings
####################################################*/	

	//Check Phone Number
	var checkPhoneNumber = function(argNumber) {
		//Define Regular expression
		var expression = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		//Test string thats passed
		var checkString = expression.test(argNumber);
		//Return True or False via test method
		return checkString;
	};

	//Check Email
	var checkEmail = function(argString) {
		//Define Regular Expression
		var expression =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		//Test string thats passed
		var checkString = expression.test(argString);
		//Return true or false via test method
		return checkString;
	};

	//Check URL
	var checkURL = function(argString) {
		//Define Regular Expression
		var expression = /^(http|https):/;
		//Test string thats passed
		var checkString = expression.test(argString);
		//Return true or false
		return checkString;

	};

	//Split word and titleCase each
	var splitTitleCase = function(argString) {
		//Create function to Uppercase/Titlecase to first letter of each word in sentence.
		var titleCaseString = function(argString) {
			return argString.charAt(0).toUpperCase() + argString.substr(1);
		};
		//Apply function to first letter of each word.
		var modifiedString = argString.replace(/\w\S*/g, titleCaseString);
		//Return modified string
		return modifiedString;			
	};


	
	//Change string seperator
	swapSeperator = function(argString, argSeperator1, argSeperator2) {
		//Split string at original seperator as specified w/ argSeperator1
		var splitString = argString.split(argSeperator1);
		//Rejoin array with new seperator as specified w/ argSeperator2
		var rejoinedString = splitString.join(argSeperator2);
		//Return Final String
		return rejoinedString;
	};


/* ###################################################
Numbers
####################################################*/	
	
	//Specify decimal placement
	var placeDecimal = function(argNumber) {

	};


	//Fuzzy Number Match		
	var fuzzyNumberMatch = function(argNumber1, argNumber2, argPercentage) {  
	
	};

	
	//Date difference between 2 dates: Days	
 	var daysBetweenDates = function(argDate, argDate) {

    };

	
	//Convert String to Number	
	var convertStringtoNumber = function(string) {
	
	}; 

/* ###################################################
Arrays
####################################################*/

	
	//Retrieve smallest value in array
	var smallestValue = function(argArray, argNumber) {

	};


	//Total value of numbers only in mixed array
	var sumNumbers = function(argArray) {

	};



	//Array Sorted by key
	var sortArrayByKey = function(argArray) {

	};	

/* ###################################################
Returns
####################################################*/

	return {

		//String Returns
		"checkPhoneNumber" 		: 	checkPhoneNumber,
		"checkEmail"			: 	checkEmail,
		"checkURL"				: 	checkURL,
		"splitTitleCase"		: 	splitTitleCase,
		"swapSeperator"			: 	swapSeperator,

		//Number Returns
		"placeDecimal"			: 	placeDecimal,
		"fuzzyNumberMatch"		: 	fuzzyNumberMatch,
		"daysBetweenDates"		: 	daysBetweenDates,
		"convertStringtoNumber"	: 	convertStringtoNumber,

		//Array Returns
		"smallestValue"			: 	smallestValue,
		"sumNumbers"			: 	sumNumbers,
		"sortArrayByKey"		: 	sortArrayByKey


	};

};

var lib = new utilityLibrary();
//Phone Number Test
console.log("The phone number 407-463-4216 is = " + lib.checkPhoneNumber("407-463-4216"));
//Email Test
console.log("This email address, michael@visualaesthetic.com is  = " + lib.checkEmail("michael@visualaesthetic.com"));
//URL Test
console.log("This URL, www.visualaesthetic.com is = " + lib.checkURL("www.visualaesthetic.com") + " because it does not have http:// or https://.");
//TitleCase Test
console.log("looking forward to attending festival of the masters = " + lib.splitTitleCase("looking forward to attending festival of the masters"));
//Test seperator change
console.log('"a|b|c" changes to = ' + swapSeperator("a|b|c","|","-"));


