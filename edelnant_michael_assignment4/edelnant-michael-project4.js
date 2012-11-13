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
		//Define Regular expression: 
		//Check for: 
		//(three numbers - three numbers - 4 numbers) pattern
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
		//Define Regular Expression: Check for http or https within the string.
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
	var placeDecimal = function(argNumber,argPlacement) {
		//Should I check to see if argument isNaN prior to applying toFixed?
		var result = argNumber.toFixed(argPlacement);
		return result;		
	};


	//Fuzzy Number Match		
	var fuzzyNumberMatch = function(argNumber1, argNumber2, argPercentage) {  
		var percentFactor = argNumber2*(argPercentage/100);
		var result;
		//Compare values +/- percentFactor. If within percentage, return true.
		if(argNumber1 >= argNumber2 - percentFactor && argNumber1 <= argNumber2 + percentFactor) {
			result = true;
		} else {
			result = false;
		};

		return result;
	};


	
	//Date difference between 2 dates: Default Days	
 	var diffDate = function(argDate1, argDate2,argFormat) {
		//Global Variables
		var compareDate1 = Date.parse(argDate1);
		var compareDate2 = Date.parse(argDate2);
		var format = argFormat.toString();
		var diffMs;
		var diffDays;
		var diffHrs;
		var diffMins;
		var result;

		//Start the math;
		diffMs = Math.abs((compareDate1 - compareDate2)); // milliseconds between now & Christmas
		//86400000 in a day
		diffDays = Math.abs(Math.round((diffMs) / 86400000)); // days
		//24 hours in a day
		diffHrs = Math.abs(Math.round((diffDays) * 24)); // hours
		//60 min in a hour.
		diffMins = Math.abs(Math.round((diffHrs) * 60)); // minutes

		if(format === "ms"){
			result = diffMs;
		}else if(format === "d") {
			result = diffDays;
		}else if(format === "h") {
			result = diffHrs
		}else if(format === "m") {
			result = diffMins
		}else if(!argFormat){
			result = diffDays
		};

		return result;
    };

	
	//Convert String to Number	
	var convertStringtoNumber = function(argString) {
		var result = parseFloat(argString);
		return result;
	}; 

/* ###################################################
Arrays
####################################################*/

	
	//Retrieve smallest value in array
	var smallestValueGT = function(argArray, argNumber) {
		var baseArray = argArray;
		var storeArray = [];
		var result;
		//Loop through argArray and push all numbers that are higher than the argNumber
		//to storeArray.
		for (var i = 0; i < baseArray.length; i++) {
			if(parseInt(baseArray[i]) > parseInt(argNumber)) {
				storeArray.push(baseArray[i]);
			};
		};
		//Retrieve lowest value from the storeArray
		result = Math.min.apply(0,storeArray);

		return result;

	};


	//Total value of numbers only in mixed array
	var sumNumbers = function(argArray) {
		var baseArray = argArray;
		var sumValue = 0;
		//Loop through argArray and add num value to variable.
		//to storeArray.
		for (var i = 0; i < baseArray.length; i++) {			
			//If the value is a number, add to sumValue.
			if(!isNaN(baseArray[i])) {
				sumValue = sumValue + parseFloat(baseArray[i]);
			};
		};

		return sumValue;		

	};



	//Array Sorted by key
	var sortArrayByKey = function(argArray) {
		var baseArray = argArray;
		for(var key in baseArray) {
			console.log(baseArray[key]);
		}
		baseArray.sort(
			//Compare values and sort
			function(a,b) {
				return parseFloat(a[key]) - parseFloat(b[key])
			});
		return baseArray;


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
		"diffDate"				: 	diffDate,
		"convertStringtoNumber"	: 	convertStringtoNumber,

		//Array Returns
		"smallestValueGT"		: 	smallestValueGT,
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
//Decimal Placement
console.log("2.1 = " + lib.placeDecimal(2.1, 2));
//Fuzzy Number Test
console.log("Do the numbers 4 & 9 match within a 40% margin? Answer = " + lib.fuzzyNumberMatch(4,9,40));
//Date Dif
console.log("There are " + lib.diffDate("11/13/2012","11/22/2012","d") + " days between the two dates provided");
console.log("There are " + lib.diffDate("11/13/2012","11/22/2012","h") + " hours between the two dates provided");
console.log("There are " + lib.diffDate("11/13/2012","11/22/2012","m") + " minutes between the two dates provided");
console.log("There are " + lib.diffDate("11/13/2012","11/22/2012", "ms") + " milliseconds between the two dates provided");
//Convert String to Number
console.log("This string:14567ba is = " + lib.convertStringtoNumber("14567ba"));
//Smallest Value in Array GT
console.log("The smallest value that is greater than 4 is = " + lib.smallestValueGT(["1","2","3","4","5","6","7","8","9"],4));
//SumValue
console.log("The sum value of all numbers within the following array: ['Bear',10,'Fish',15,25,'Moose',75] is = " + lib.sumNumbers(['Bear',10,'Fish',15,25,'Moose',75]));
//
lib.sortArrayByKey([{sortNumber:3},{sortNumber:1},{sortNumber:2}]);


