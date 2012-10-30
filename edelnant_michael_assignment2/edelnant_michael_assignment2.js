// Author: Michael S. Edelnant
// SDI 1211
// Project 1
// Fun Story Time

/* ##########################
Bulleted Story List
###########################

•	Introduce myself to my opponent & shake hands
•	Lag to determine who breaks
•	Call for second opinion to determine who won the lag.
•	Determination is that I won the lag.
•	Approach the table for my break.
•	Decide on standard break.
•	I break the rack with a standard break
•	1 Solid and 1 Stripe fall.
•	Decide on Stripes
•	Sink the 9
•	Sink the 14
•	Sink the 12
•	Sink the 13
•	Sink the 15
•	Play safety on the 11
•	Opponent misses shot and gives me ball in hand
•	Sink the 11 ball
•	Mark pocket for the 8 ball
•	Line up shot for 8 ball
•	Sink 8 ball and win first rack
•	To be continued.

*/

/* ##########################
Define Variables
###########################*/

var myName = "Michael"; 							//string
var opponentShortName = "Manuel"; 					//string
var opponentFullName = "Manuel \"Speedy\" Lopez";	//escape string

var matchLocation = "Trickshots Winter Park";		//string

var stripeCount = 7;								//num
var solidCount = 7;									//num
var matchRaceCount = 5;								//num
var DidIWinLag = false;								//boolean
var matchComplete = false;							//boolean

var solidSet = ["1","2","3","4","5","6","7","8"];
var stripeSet = ["9","10","11","12","13","14","15"];

var procedureFunction = function(passedString) {
	if(passedString === "") {
	
	} else {

	};
};

var booleanFunction = function(trueFalse,falseTrue) {
	var boolFlag;
	if(trueFalse === falseTrue) {
		boolFlag = true;
	} else {
		boolFlag = false;
	};
	return boolFlag;
};

var numberFunction = function(passedNumber) {
	var i = 0;
	while(i < passedNumber) {
		i++
		console.log(i);
	};
};

var stringFunction = function(stringOne,stringTwo) {
	var myStringOne = stringOne;
	var myStringTwo = stringTwo;
	var outputString = myStringOne + " " + myStringTwo;
	
	return outputString;
};

//Array Function
var deleteBalls = function(passedNumber, passedArray) {
	for (var i=0, j=passedNumber; i < j; i++) {
		//Random Index determined by initial set length of stripes or solids
		varRandomIndex = (Math.floor((Math.random()*passedArray.length)));
		//Call out which balls were made
		console.log(passedArray[varRandomIndex] + " ball made");
		//Remove balls made
		passedArray.splice(varRandomIndex, 1);
		//Print array after elements removed
		console.log(passedArray);
	};
};


//Random Break Function to make things interesting. Capping it to max of 3 balls each on the break.
var breakRack = function(playerName,ballCount) {
	var madeBalls = ballCount;
	if(madeBalls > 0) {
		varRandomFlag = (Math.floor((Math.random()*2)+1));
		//I like randomness: is there a better way to retrieve a random boolean?
		if(varRandomFlag > 1) {
			//Make Stripes
			deleteBalls(madeBalls, stripeSet);
		} else {
			//Else Make Solids
			deleteBalls(madeBalls, solidSet);
		}
		
	} else {
		console.log(playerName + " made nothing on the break.")
	};
	
};

breakRack(myName, 3);
numberFunction(10);





















