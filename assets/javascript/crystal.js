const targetMin = 19;
const targetMax = 120;//TODO reset to 120 
var targetNumber = 0;
var gameCounter = 0;

const crystalMin = 1;
const crystalMax = 12;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

//var crystal_values = [];

/*

for (var i=0; i<10; i++)
{
  crystal_values[i]=getRndInteger(crystalMin, crystalMax);
}
*/

var crystal={
  ruby:{
    name: "ruby",
    value: 0

  },
  amethyst:{
    name: "amethyst",
    value: 0

  },
  aquamarine:{
    name: "aquamarine",
    value: 0

  },
  peridot:{
    name: "peridot",
    value: 0

  },
  garnet:{
    name: "garnet",
    value: 0

  },
  emerald:{
    name: "emerald",
    value: 0

  },
  opal:{
    name: "opal",
    value: 0

  },
  topez:{
    name: "topez",
    value: 0

  },
  turqoise:{
    name: "turqoise",
    value: 0

  },
  tanzanite:{
    name: "tanzanite",
    value: 0

  }
};

var winCount =0;
var lossCount =0;
var currentScore;

var startGame = function(){
  currentScore = 0;

  targetNumber = getRndInteger(targetMin, targetMax); 
  
  
  crystal.ruby.value=getRndInteger(crystalMin, crystalMax);
  crystal.amethyst.value=getRndInteger(crystalMin, crystalMax);
  crystal.aquamarine.value=getRndInteger(crystalMin, crystalMax);
  crystal.peridot.value=getRndInteger(crystalMin, crystalMax);
  crystal.garnet.value=getRndInteger(crystalMin, crystalMax);
  crystal.emerald.value=getRndInteger(crystalMin, crystalMax);
  crystal.opal.value=getRndInteger(crystalMin, crystalMax);
  crystal.topez.value=getRndInteger(crystalMin, crystalMax);
  crystal.turqoise.value=getRndInteger(crystalMin, crystalMax);
  crystal.tanzanite.value=getRndInteger(crystalMin, crystalMax);
  //alert("targetNumbe "+targetNumber);
  

  $("#target-score").html(targetNumber);
  $("#your-score").html(currentScore);
  $("#number-game").html(gameCounter);
 
  console.log('-----------------------------');
  console.log("targetNumbe "+targetNumber);
  console.log('-----------------------------');
  console.log("ruby "+crystal.ruby.value+"| peridot "+crystal.peridot.value+"| topez "+crystal.topez.value+"| turqoise "+crystal.turqoise.value);
  console.log('-----------------------------');

  gameCounter++;
}

var addValues=function(crystal){

  currentScore = currentScore + crystal.value;
  console.log("your score:  "+currentScore);
  $("#your-score").html(currentScore);
  checkWin();


}

var checkWin = function()
{

  
  if (currentScore === targetNumber)
  {
   // $("#your-score").html(currentScore); 
   alert("Congrats, You Win!");
   console.log("you just won the game"); 
    winCount = winCount +1;
    $("#win-count").html(winCount);
    //startGame();
    
  }
  else if (currentScore > targetNumber)
  {
    //$("#your-score").html(currentScore);
   alert("Sorry, You lost!");
   console.log("you lost the game"); 
   lossCount = lossCount +1;
   $("#loss-count").html(lossCount);
   //startGame();
  }

}

startGame();

//$("#number-to-guess").html(targetNumber);

//var counter = 0;

$("#ruby").click(function(){

  //alert("Ruby:  "+crystal.ruby.value);
  addValues(crystal.ruby);
 

});

$("#amethyst").click(function(){

  //alert("Amethyst:  "+crystal.amethyst.value);
  addValues(crystal.amethyst);
  
});

$("#aquamarine").click(function(){

  //alert("Aqumaine:  "+crystal.aquamarine.value);
  addValues(crystal.aquamarine);
  
});

$("#peridot").click(function(){

  //alert("Peridot:  "+crystal.peridot.value);
  addValues(crystal.peridot);
  
});

$("#garnet").click(function(){

  //alert("Garnet:  "+crystal.garnet.value);
  addValues(crystal.garnet);
  
});

$("#emerald").click(function(){

  //alert("Emerald:  "+crystal.emerald.value);
  addValues(crystal.emerald);
  
});

$("#opal").click(function(){

  //alert("Opal:  "+crystal.opal.value);
  addValues(crystal.opal);

});

$("#topez").click(function(){

  //alert("Topez:  "+crystal.topez.value);
  addValues(crystal.topez);

});

$("#turqoise").click(function(){

  //alert("Turqoise:  "+crystal.turqoise.value);
  addValues(crystal.turqoise);
  
});

$("#tanzanite").click(function(){

  //alert("Tanzanite:  "+crystal.tanzanite.value);
  addValues(crystal.tanzanite);
  
});

$("#playagain").click(function(){
  
  startGame();
  
});

$("#reset-game").click(function(){
  gameCounter = 0;
  winCount =0;
  $("#win-count").html(winCount);
  lossCount =0;
  $("#loss-count").html(lossCount);
  startGame();
  
});


/*

$(".crystal-image").on("click", function() {



  counter += 10;

  //alert("New score: " + counter);

  if (counter === targetNumber) {

    alert("You win!");
  }

  // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
  else if (counter >= targetNumber) {

    // Then they are alerted with a loss.
    alert("You lose!!");
  }
  // This is fine except the way our code is written every user will win first (when they hit 50).
  // But will then lose immediately if they click again. Seems pointless right?
  // To make this a game we need to create additional code to randomize the counter and targetScore.

});

*/