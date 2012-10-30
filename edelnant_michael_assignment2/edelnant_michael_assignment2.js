// Author: Michael S. Edelnant
// SDI 1211
// Project 2
// Fun Story Time


/* ##########################
Define Variables
###########################*/

var myName = "Michael"; 							//string
var opponentShortName = "Manuel"; 					//string
var opponentFullName = "Manuel \"Speedy\" Lopez";	//escape string

var matchLocation;		//string

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

//booleanFunction
var didMakeEightBall = function(argArray,argNumber) {
    var i = argArray.length;
    while (i--) {
        //If 8 still exists in set, then set to false
        if (parseInt(argArray[i]) == argNumber) { 
        	return false;
    	};
    };
    //else return true
    return true;
};

var numberFunction = function(passedNumber) {
	var i = 0;
	while(i++ < passedNumber) {
		console.log(i);
	};
};

//String Function
var stringFunction = function(stringOne,stringTwo) {
	var myStringOne = stringOne;
	var myStringTwo = stringTwo;
	var outputString = myStringOne + " " + myStringTwo;
	
	return outputString;
};

//Array Function
var deleteBalls = function(argNumber, argArray) {
	for (var i=0, j=argNumber; i < j; i++) {
		//Random Index determined by initial set length of stripes or solids
		var RandomIndex = (Math.floor((Math.random()*argArray.length)));
		//Call out which balls were made
		console.log(argArray[RandomIndex] + " ball falls...");
		//Remove balls made
		argArray.splice(RandomIndex, 1);
	};
	//Return manipulated array
	return argArray;

};


//Random Break Function to make things interesting. Capping it to max of 3 balls each on the break.
var breakRack = function(playerName,ballCount) {
	ballCount;
	if(ballCount) {
		var RandomFlag = (Math.floor((Math.random()*3)+1));
		console.log(playerName + " breaks!");
		//I like randomness: is there a better way to retrieve a random boolean?
		if(RandomFlag === 1) {
			//Make Stripes
			stripeSet = deleteBalls(ballCount, stripeSet);
		} else if(RandomFlag === 2) {
			//Else Make Solids
			solidSet = deleteBalls(ballCount, solidSet);
		} else {
			//Make Stripes and One less solid
			stripeSet = deleteBalls(Math.floor(ballCount), stripeSet);
			solidSet =  deleteBalls(Math.floor(ballCount), solidSet);
		}

		//Handle Pluralisation
		if(ballCount > 1) {
			if(ballCount > 2 && RandomFlag === 3) {
				console.log("SledgeHammer Break!")
				console.log(playerName + " made " + (ballCount*2) + " balls on the break!");
				console.log("I've never seen anything like it before!!")
			} else {
				console.log(playerName + " made " + ballCount + " balls on the break!");
			};
		} else {
			console.log(playerName + " made " + ballCount + " ball on the break!");
		}

		//Check if 8 fell...
		if(didMakeEightBall(solidSet,8) === true) {
			console.log("Wait a sec! " + playerName + " made the 8 on the break! On to the next rack!");
		}
		
	} else {
		//Womp Womp. Lame.
		console.log(playerName + " made nothing on the break.")
	};
	
};

breakRack(myName, 4);
numberFunction(10);
matchLocation = stringFunction("Trickshots", "Winter Park");
console.log(matchLocation);
console.log(stripeSet);
console.log(solidSet);





















