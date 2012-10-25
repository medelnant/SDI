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


/* ##########################
Output Variables
###########################*/

console.log("Hello, my name is " + myName + " and I would like to tell you a story.");
console.log("To set the scene, I was at " + matchLocation + " for my APA Billiards League.");
console.log("I was waiting for my match when my captain came to me and told me I would be playing " + opponentFullName + ".");
console.log("On a side note, did you know that there are " + stripeCount + " stripes and " + solidCount + " solids in an 8 Ball Rack?");
console.log(DidIWinLag + " story! So now you know.");
console.log("It is also " + DidIWinLag + " that someone needs to win the lag to determine who breaks first.");
console.log("Ok, back to the match...");
console.log(opponentShortName + " and I are both SL6's, which means that it's a " + matchRaceCount + "-" + matchRaceCount + " race.");
console.log("It would be " + matchComplete + " to think that first to 3 racks wins the match.")
console.log("First to " + matchRaceCount + " racks wins the match.");
console.log("We shake hands and approach the table to lag.");

/* ##########################
Execute Process
###########################*/
initProcess();


/* ##########################
Functions
###########################*/

function initProcess() {

	if(DidIWinLag)  {
		console.log("I win the lag!");
		console.log(opponentShortName + " sits down and I prepare to break.");
		console.log("On the break, all balls scatter...")
		
		//Run a function that randomizes the break per solid & stripe
		eightBallBreak();

		//If I make a solid or stripe do...
		if (stripeCount < 7 || solidCount < 7 ) {
			//If I make 1 stripe and no solid do...
			if(stripeCount < 7 && solidCount === 7) {
				
				console.log("Looks like I made " + (7 - stripeCount) + " stripe on the break!");
				console.log("I run the rack and mark my pocket for the 8 ball.");
				console.log("I sink the 8 ball!");
				matchRaceCount-- ;
				console.log(myName + " Wins!! Only " + matchRaceCount + " more racks to go!"); 
			
			//else if I make 1 solid and no stripe do...
			} else if(solidCount < 7 && stripeCount === 7) {

				console.log("Looks like I made " + (7 - solidCount) + " solid on the break!");
				console.log("I run the rack and mark my pocket for the 8 ball.");
				console.log("I sink the 8 ball!");
				matchRaceCount-- ;
				console.log(myName + " Wins!! Only " + matchRaceCount + " more racks to go!"); 			

			//else if I make 1 solid and 1 stripe do...
			} else if(solidCount < 7 && stripeCount < 7) {

				console.log("Looks like I made " + (7 - solidCount) + " solid and " + (7 - stripeCount) + " stripe on the break!");
				console.log("I decide to shoot stripes because they look a little more spread on the table.");
				console.log("I run the rack and mark my pocket for the 8 ball.");
				console.log("I sink the 8 ball!");
				matchRaceCount-- ;
				console.log(myName + " Wins!! Only " + matchRaceCount + " more racks to go!"); 
			};	
		//I'm a woos and made no balls. Manuels turn.	
		} else {

			console.log("but, I made no balls on the break. It is now " +opponentShortName+ "'s turn.")
			console.log(opponentShortName + " runs the rack but scratches on the 8 ball.");
			matchRaceCount-- ;
			console.log(myName + " Wins!! Only " + matchRaceCount + " more racks to go!");

		};
	//I lose the lag. Manuels turn.	
	} else {

		if(opponentShortName === "Manuel") {

			console.log(opponentShortName + " wins the lag. Doh!");
			console.log("On the break, few balls scatter...")
			
			//Run a function that randomizes the break per solid & stripe
			eightBallBreak();

			
			console.log(opponentShortName + " runs the rack but scratches on the 8 ball.");
			matchRaceCount-- ;
			console.log(myName + " Wins!! Only " + matchRaceCount + " more racks to go!");

		} else {
			console.log(opponentShortName + " seems to have run off from fear of defeat.");
			matchRaceCount = matchRaceCount - 5;
			console.log(myName + " Wins by Forfeit!! Only " + matchRaceCount + " more racks..."); 
			console.log("Wait!.. thats the match. Time to go home and call it a night. Go Team " + myName + "!");
			matchComplete = true;
		}
	};

	if(matchComplete) {
		console.log("...");
		console.log("Have a good night!");
	} else {
		console.log("...");
		console.log("...stay tuned for more dramatic billiards play!...");	
	}

};

//Random Break Function to make things interesting. Capping it to max of 3 balls each on the break.
function eightBallBreak() {

	stripeCount = (stripeCount - (Math.floor((Math.random()*3)+1)));
	solidCount = (solidCount - (Math.floor((Math.random()*3)+1)));

};





















