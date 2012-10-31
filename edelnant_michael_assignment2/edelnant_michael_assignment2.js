// Author: Michael S. Edelnant
// School: Full Sail University
// Course: SDI 1211
// Instructor: Lee Lewis
// --------------------------------------------------------------------------- /
// Project 2
// Project Requirements: https://dl.dropbox.com/u/146464/project2_flowChart.png
// Due Date: 11/1/2012
// --------------------------------------------------------------------------- /
// Fun Story Time w/ encapsulation



/* ###################################################
Define Variables
####################################################*/
var myName = "Michael"; 								//string
var opponentShortName = "Manuel"; 						//string
var opponentFullName = "Manuel \"Speedy\" Lopez";		//escape string

var activePlayer;										//string
var matchLocation;										//string

var matchRackCount = 0;									//num
var matchRaceCount = 5;									//num
var DidIWinLag = false;									//boolean
var matchComplete = false;								//boolean
var newRack = true;										//boolean

var solidSet = ["1","2","3","4","5","6","7","8"];		//array
var stripeSet = ["9","10","11","12","13","14","15"];	//array


/* ###################################################
Process Function:
Start a new rack
####################################################*/
var createNewRackProcess = function(trueFalse) {
	if(trueFalse === true) {	
		matchRackCount++
		console.log("Chapter " + matchRackCount + " | Rack " + matchRackCount);
		console.log("--------------------------------------------------------");
		newRack = false;			
		breakRack(activePlayer, (Math.floor((Math.random()*4)+1)));

	} else {
		console.log("End of Story");
	};
};

/* ###################################################
Boolean Function:
Check if Eight ball exists in array
####################################################*/
var didMakeEightBall = function(argArray,argNumber) {
    var i = argArray.length;
    while (i--) {
        //If 8 still exists in set, then set to false
        if (parseInt(argArray[i]) == argNumber) { 
        	return false;
    	};
    };

    console.log("Wait a sec! " + activePlayer + " made the 8 on the break! On to the next rack!");
    console.log("--------------------------------------------------------");
    newRack = true;
	solidSet = ["1","2","3","4","5","6","7","8"];		
	stripeSet = ["9","10","11","12","13","14","15"];    
    createNewRackProcess(newRack);
    //else return true
    return true;
};

/* ###################################################
Number Function:
Wait function for match play. 
####################################################*/
var waitForMatch = function(argNumber) {
	var i=0;
	var matchLength = 45
	var hours = 0;
	var minutes = 0;
	console.log("--------------------------------------------------------");
	console.log("Prelude | Warm-up");
	console.log("--------------------------------------------------------");

	while(i++ < argNumber) {
		minutes = i * matchLength;
		hours = minutes/60;
		console.log(hours + " hours go by. Still Practicing.");
	};
	return hours;
};

/* ###################################################
String Function:
Concatenate two strings.
####################################################*/
var stringFunction = function(argString1,argString2) {
	var myStringOne = argString1;
	var myStringTwo = argString2;
	var outputString = myStringOne + " " + myStringTwo;
	//Return new string
	return outputString;
};

/* ###################################################
Array Function:
Output random made balls and remove those specific 
balls from the array being passed.
####################################################*/
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

/* ###################################################
Standard Function:
Magic 8 ball: Who will win lag?
####################################################*/
var magicEightBall = function(playerName, opponentName) {
	var RandomFlag = (Math.floor((Math.random()*2)+1));
	if(RandomFlag === 1) {
		activePlayer = playerName;
		console.log(activePlayer + " won the lag! Lets get this match started!");
		console.log
		console.log("--------------------------------------------------------");
	} else {
		activePlayer = opponentName;
		console.log(activePlayer + " won the lag! Lets get this match started!");
		console.log("--------------------------------------------------------");
	};

	createNewRackProcess(newRack);	
};


/* ###################################################
Random Break Function:
Random Scenario per break. Pass number of balls made and see what happens.
####################################################*/
var breakRack = function(playerName,ballCount) {
	activePlayer = playerName;
	ballCount;
	if(ballCount) {
		var RandomFlag = (Math.floor((Math.random()*3)+1));
		console.log(playerName + " breaks!");
		//More Random Goodiness
		if(RandomFlag === 1) {
			//Make Stripes
			stripeSet = deleteBalls(ballCount, stripeSet);
		} else if(RandomFlag === 2) {
			//Else Make Solids
			solidSet = deleteBalls(ballCount, solidSet);
		} else {
			//Super Break! Damn...
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
		};

		//Check if 8 fell...
		didMakeEightBall(solidSet,8);
		return;
		
	} else {
		//Womp Womp. Lame.
		console.log(playerName + " made nothing on the break.")
		if(activePlayer === myName) {
			activePlayer = opponentShortName;
		} else {
			activePlayer = myName;
		};
	};


	
};

/* ###################################################
Story Time:
Lets put everything together.
####################################################*/

//Set Setting
	//Lets start out with the string function
	matchLocation = stringFunction("Trickshots", "Winter Park, FL");
	console.log("Hello, my name is " + myName + " and I would like to tell you a story.");
	console.log("To set the scene, I was at " + matchLocation + " for my APA Billiards League.");
	console.log("I had arrived there at around 7:45pm. 15min past our usual start time.");
	console.log("I made my rounds and spoke with my captain. He mentioned that I would most likely play the 4th match.");

//Lets go grab a practice table
	console.log("Since I had to wait 3 matches, I decided to grab a practice table.");
	//Number Function coming up
	console.log("Man "+ waitForMatch(3) + " hours is a long time to wait to play.. Grrr!");
	console.log(" ");

//Yay, I get to play.
	console.log("I was finally up and my captain decided to match me against the other teams SL6.");
	console.log("Since i'm an SL6 as well, I didn't mind the competetive play.");
	console.log("and since we are both SL6's it was a " + matchRaceCount + "-" + matchRaceCount + " race.");
	console.log("First to " + matchRaceCount + " racks wins the match.");
	console.log("My opponents name was " + opponentShortName + " otherwise known as " + opponentFullName);
	console.log("We both approached the table, shook hands and wished each other good luck.");
	console.log("We then set up for our lag shots and got the match under way");

/*#####################################
It's Game Time!!
#####################################*/
	console.log("--------------------------------------------------------");
	console.log("The balls slowly roll to a stop and...");
	//In all fairness, lets have the Magic 8 Ball decide who will win this lag
	/*###########################################
	NOTE: 
		+ magicEightBall() calls (createNewRackProcess() :: procedure function)
		+ createNewRackProcess calls (breakRack() :: extra function with 2 args).
		+ breakRack calls (deleteBalls() :: array function) & (didMakeEightBall() :: boolean function).
		+ didMakeEightBall calls createNewRackProcess() if 8 ball is made. Rinse & Repeat. 
	############################################*/
	magicEightBall(myName,opponentShortName);

	console.log("...");
	console.log("...stay tuned for more dramatic billiards play!...");
	console.log(" ");
	console.log("--------------------------------------------------------");
	console.log("Hint: Hit refresh for different outcomes of the lag & break result!")
	console.log("If you haven't seen an 8 ball break yet.. keep trying!")


























