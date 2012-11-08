// Author: Michael S. Edelnant
// School: Full Sail University
// Course: SDI 1211
// Instructor: Lee Lewis
// --------------------------------------------------------------------------- /
// Project 3
// Project Requirements: https://dl.dropbox.com/u/146464/EdelnantMichael_SDI_Project3_FlowChart.pdf
// Due Date: 11/8/2012
// --------------------------------------------------------------------------- /
// Fun Story Time w/ JSON, Objects & Constructors Oh' My!


/* ###################################################
Global Variables
####################################################*/
var myName;
var opponent;
var pointMultiplier = 10;
var arcadePoints = 0;

/* ###################################################
Build Primary Match Object
####################################################*/
var matchObj = {
	activePlayer	: "",										//string
	protagonist		: "",										//string
	antagonist		: "",										//string
	matchLocation	: "",										//string
	newRack 		: true,										//boolean
	isMatchStarted 	: false,									//boolean	
	matchComplete 	: false,									//boolean
	raceCount 		: 5,										//number
	rackCount 		: 0,										//number
	solidSet 		: ["1","2","3","4","5","6","7","8"],		//array
	stripeSet 		: ["9","10","11","12","13","14","15"], 		//array

	/* ###################################################
	Method: Procedure | Find Players
	####################################################*/
	findPlayers: function (jSONObj) {
		if (jSONObj) {
			for (var key in jSONObj.players) {
				var player = jSONObj.players[key];
				if(parseInt(key) === 0) {
					this.protagonist = newPlayer(player.fName);
					this.protagonist.lName = player.lName;
					this.protagonist.nName = player.nName;
					this.protagonist.skillLevel = player.SL;
					this.protagonist.favGames = player.favGames;
					//console.log("First Name: " + this.protagonist.fName + " Last Name " + this.protagonist.fName +
					//" NickName " + this.protagonist.nName + " FavGames: " + this.protagonist.favGames);
				} else if (parseInt(key) === 1) {
					this.antagonist = newPlayer(player.fName);
					this.antagonist.lName = player.lName;
					this.antagonist.nName = player.nName;
					this.antagonist.skillLevel = player.SL;
					this.antagonist.favGames = player.favGames;
					//console.log("First Name: " + this.antagonist.fName + " Last Name " + this.antagonist.fName +
					//" NickName " + this.antagonist.nName + " FavGames: " + this.antagonist.favGames);
				} else {
					console.log("Hey buddy! Please remove extra players from JSON data.");
				}				
			};        			
	} else {
			console.log("Looks like we will have to a make-up since there is not enough time to play our match.") };   
	},

	/* ###################################################
	Method: Procedure | Find Game Types
	####################################################*/
	findGames: function (jSONObj) {
		if (jSONObj) {
			for (var key in jSONObj.games) {
				var game = jSONObj.games[key];
				console.log("Game Name: " + game.gName + " Solids: " + game.solids + " Stripes: " + game.stripes);
				console.log("Objective: " + game.objective);
			};
		}
	},

	/* ###################################################
	Method: Magic 8 ball: Who will win lag? 
	####################################################*/
	magicEightBall: function(playerName, opponentName) {
		var RandomFlag = (Math.floor((Math.random()*2)+1));
		if(RandomFlag === 1) {
			this.activePlayer = this.protagonist;
			console.log(this.activePlayer.fName + " won the lag! Lets get this match started!");
			console.log
			console.log("--------------------------------------------------------");
		} else {
			this.activePlayer = this.antagonist;
			console.log(this.activePlayer.fName + " won the lag! Lets get this match started!");
			console.log("--------------------------------------------------------");
		}

		this.createNewRackProcess(this.newRack);	
	},

	/* ###################################################
	Method: Start a new rack.
	####################################################*/
	createNewRackProcess: function(trueFalse) {
		//Logical Operator
		if(!trueFalse) {	
			console.log("End of Story");
		} else {
			this.rackCount++
			console.log("Chapter " + this.rackCount + " | Rack " + this.rackCount);
			console.log("--------------------------------------------------------");
			//Trip Flag
			this.newRack = false;			
			//Init breakRack
			this.activePlayer.breakRack(this.activePlayer, (Math.floor((Math.random()*4)+1)));		

		}
	},

	/* ###################################################
	Method: String Combo | Concatenate two strings
	####################################################*/
	stringFunction: function(argString1,argString2) {
		//Here's my left hand
		var myStringOne = argString1;
		//Here's my right hand
		var myStringTwo = argString2;
		//Woah magic, now they are one!?
		var outputString = myStringOne + " " + myStringTwo;
		//Return new string
		return outputString;
	}	
};

/* ###################################################
Define Person Constructor
####################################################*/
var newPlayer = function(name) {

	/* ###################################################
	Method: Boolean
	Check if Eight ball exists in array
	####################################################*/
	var didMakeBall = function(argNumber1,argNumber2) {
	    if(argNumber1 != argNumber2) {
	    	arcadePoints += 1000;
	    	console.log("Wait a sec! " + matchObj.activePlayer.fName + " made the 8 on the break! On to the next rack!");
		    console.log("That's 1000 bonus points!!")
		    console.log("Total Arcade Points for this break = " + arcadePoints);
		    console.log("--------------------------------------------------------");
		    //If this so called ball happens to be the 8.. do...
		    if(argNumber2 === 8){
			    //Trip Flag
			    matchObj.newRack = true;
			    //Reset sets
				matchObj.solidSet = ["1","2","3","4","5","6","7","8"];		
				matchObj.stripeSet = ["9","10","11","12","13","14","15"];    
			    //Do it again!
			    matchObj.createNewRackProcess(matchObj.newRack);
		    };
		    //Yes, the ball you have inquired about has fallen
		    return true;
	    } else {
	    	console.log("Total Arcade Points for this break = " + arcadePoints);
	    	//No, the ball you have inquired about is still on the table
	    	return false;
	    };

	};

	/* ###################################################
	Method Function:
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

		//iterate through matchCount
		while(i++ < argNumber) {
			//matchCountIteration multipled by matchLength gives us total minutes
			minutes = i * matchLength;
			//convert minutes to hours (floating point)
			hours = minutes/60;
			console.log(hours + " hours go by. Still Practicing.");
		};
		return hours;
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
			//Adding pointMultiplier to add some form of arcade feel
			//and to meet the requirement of the nested loop.
			for (var n=1, k=argArray.length; n<k; n++) {
				pointMultiplier = pointMultiplier+15;
				
			};
		};
		//Return manipulated array
		console.log("Arcade Bonus Points: " + pointMultiplier);
		arcadePoints = arcadePoints + pointMultiplier;
		pointMultiplier = 10;
		return argArray;

	};

	/* ###################################################
	Random Break Function:
	Random Scenario per break. Pass number of balls made and see what happens.
	####################################################*/
	var breakRack = function(player,ballCount) {
		matchObj.activePlayer = player;
		var playerName = matchObj.activePlayer.fName;
		ballCount;
		if(ballCount) {
			var RandomFlag = (Math.floor((Math.random()*3)+1));
			console.log(playerName + " breaks!");
			//More Random Goodiness
			if(RandomFlag === 1) {
				//Make Stripes
				matchObj.stripeSet = this.deleteBalls(ballCount, matchObj.stripeSet);
			} else if(RandomFlag === 2) {
				//Else Make Solids
				matchObj.solidSet = this.deleteBalls(ballCount, matchObj.solidSet);
			} else {
				//Super Break! Damn...
				matchObj.stripeSet = this.deleteBalls(Math.floor(ballCount), matchObj.stripeSet);
				matchObj.solidSet =  this.deleteBalls(Math.floor(ballCount), matchObj.solidSet);
			}

			//Handle Pluralisation
			if(ballCount > 1) {
				//Logical Operator
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
			//Grab last element from the solidSet array since it will always be the 8.
			this.didMakeBall(matchObj.solidSet[(matchObj.solidSet.length-1)],8);
			return;
			
		} else {
			//Womp Womp. Lame.
			console.log(playerName + " made nothing on the break.")
			if(matchObj.activePlayer === matchObj.protagonist.fName) {
				matchObj.activePlayer = matchObj.antagonist.fName;
			} else {
				matchObj.activePlayer = matchObj.antagonist.fName;
			};
		};

		arcadePoints = 0;

	};		


	return {
		"fName" 		: name,					//string
		"lName" 		: "",					//string
		"nName" 		: "",					//string
		"DidIWinLag" 	: false,				//boolean
		"skillLevel"	: 0,					//number
		"favGames"		: [],					//array
		"didMakeBall"	: didMakeBall,			//Method
		"waitForMatch"	: waitForMatch,			//Method 
		"deleteBalls"	: deleteBalls,			//Method
		"breakRack"		: breakRack				//Method
	};
};


matchObj.findPlayers(playerData);
//matchObj.findGames(gameData);

/* ###################################################
Story Time:
Lets put everything together.
####################################################*/

//Set Setting
	//Lets start out with the string function
	
	matchObj.matchLocation = matchObj.stringFunction("Trickshots", "Winter Park, FL");
	console.log("Hello, my name is " + matchObj.protagonist.fName + " and I would like to tell you a story.");
	console.log("To set the scene, I was at " + matchObj.matchLocation + " for my APA Billiards League.");
	console.log("I had arrived there at around 7:45pm. 15min past our usual start time.");
	console.log("I made my rounds and spoke with my captain. He mentioned that I would most likely play the 4th match.");


//Lets go grab a practice table
	
	console.log("Since I had to wait 3 matches, I decided to grab a practice table.");
	//Number Function coming up
	console.log("Man "+ matchObj.protagonist.waitForMatch(3) + " hours is a long time to wait to play.. Grrr!");
	console.log(" ");
	

//Yay, I get to play.
	
	console.log("I was finally up and my captain decided to match me against the other teams SL" + matchObj.antagonist.skillLevel + ".");
	console.log("Since i'm an SL" + matchObj.protagonist.skillLevel + " as well, I didn't mind the competetive play.");
	console.log("and since we are both SL" + matchObj.protagonist.skillLevel + "'s it was a " + matchObj.raceCount + "-" + matchObj.raceCount + " race.");
	console.log("First to " + matchObj.raceCount + " racks wins the match.");
	console.log("My opponents name was " + matchObj.antagonist.fName + ".");
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
		+ didMakeBall calls createNewRackProcess() if 8 ball is made. Rinse & Repeat. 
	############################################*/
	
	matchObj.magicEightBall(matchObj.protagonist.fName,matchObj.antagonist.fName);

	console.log("...");
	console.log("...stay tuned for more dramatic billiards play!...");
	console.log(" ");
	console.log("--------------------------------------------------------");
	console.log("Hint: Hit refresh for different outcomes of the lag & break result!")
	console.log("If you haven't seen an 8 ball break yet.. keep trying!")
	































