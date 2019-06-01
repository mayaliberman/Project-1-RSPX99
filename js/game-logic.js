// All code should be written in this file.
let P1MovesTypes = [];
let P1MovesValues = [];

let P2MovesTypes = [];
let P2MovesValues = [];

let P1TotalScore = 0;
let P2TotalScore = 0;

const P1 = 'Player One';
const P2 = 'Player Two';
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
// A function called `setPlayerMoves`, which will take a string representing a player
// (in the form of `'Player One'` or `'Player Two'`), three move types, and three move values,
//and set the correct global move variables. The method signature for this function should be as follows:
//`setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType,
// moveTwoValue, moveThreeType, moveThreeValue)`.
// }

function setPlayerMoves(
  player,
  moveOneType,
  moveOneValue,
  moveTwoType,
  moveTwoValue,
  moveThreeType,
  moveThreeValue
) {
   
  if (player === P1) {
    P1MovesTypes.push(moveOneType);
    P1MovesTypes.push(moveTwoType);
    P1MovesTypes.push(moveThreeType);
    P1MovesValues.push(moveOneValue);
    P1MovesValues.push(moveTwoValue);
    P1MovesValues.push(moveThreeValue);
  } else if(player === P2) {
    P2MovesTypes.push(moveOneType);
    P2MovesTypes.push(moveTwoType);
    P2MovesTypes.push(moveThreeType);
    P2MovesValues.push(moveOneValue);
    P2MovesValues.push(moveTwoValue);
    P2MovesValues.push(moveThreeValue);
  }

  console.log(P2MovesTypes, P2MovesValues, P1MovesTypes, P1MovesValues);
}

//  A function called `getRoundWinner`, which takes a round number (`1`, `2`, or `3`),
// compares both player's move types and values for that round, and returns the appropriate winner
// (`'Player One'`, `'Player Two'`, or `'Tie'`)

function getRoundWinner(num) {
  
   if (
    P1MovesTypes[num - 1] === ROCK &&
    P2MovesTypes[num - 1] === PAPER
  ) {
    P2TotalScore += P2MovesValues[num - 1];
    return P2;
  } else if (
    P1MovesTypes[num - 1] === ROCK &&
    P2MovesTypes[num - 1] === SCISSORS
  ) {
    P1TotalScore += P1MovesValues[num - 1];
    return P1;
  } else if (
    P1MovesTypes[num - 1] === PAPER &&
    P2MovesTypes[num - 1] === SCISSORS
  ) {
    P2TotalScore += P2MovesValues[num - 1];
    return P2;
  } else if (
    P1MovesTypes[num - 1] === PAPER &&
    P2MovesTypes[num - 1] === ROCK
  ) {
    P1TotalScore += P1MovesValues[num - 1];
    return P1;
  } else if (
    P1MovesTypes[num - 1] === SCISSORS &&
    P2MovesTypes[num - 1] === PAPER
  ) {
    P1TotalScore += P1MovesValues[num - 1];
    return P1;
  } else if (
    P1MovesTypes[num - 1] === SCISSORS &&
    P2MovesTypes[num - 1] === ROCK
  ) {
    P2TotalScore += P2MovesValues[num - 1];
    return P2;
  }  
  if (P1MovesTypes[num - 1] === P2MovesTypes[num - 1]) {
    if (P1MovesValues[num - 1] > P2MovesValues[num - 1]) {
      P1TotalScore += P1MovesValues[num - 1];
      P2TotalScore += P2MovesValues[num - 1];
      console.log(P1TotalScore, P2TotalScore)
    } else if (P1MovesValues[num - 1] < P2MovesValues[num - 1]) {
      P2TotalScore += P2MovesValues[num - 1];
      P1TotalScore += P1MovesValues[num - 1];
      console.log(P2TotalScore)
    } else {
      P1TotalScore += P1MovesValues[num - 1];
      P2TotalScore += P2MovesValues[num - 1];
      console.log(P1TotalScore, P2TotalScore)
    }
    return 'Tie';
  } 
}

// A function called `getGameWinner`, which compares both player's move
// types and values for the whole game and returns the appropriate winner
// (`'Player One'`, `'Player Two'`, or `'Tie'`)
function getGameWinner() {
    
    let winner;
  console.log('P1TotalScore', P1TotalScore, 'P2TotalScore', P2TotalScore);
  if (P1TotalScore > P2TotalScore) {
       winner =  P1;
  } else if (P1TotalScore < P2TotalScore) {
        winner =  P2;
  } else {
        winner =  'Tie';
  }
    P1MovesTypes = [];
    P1MovesValues = [];
    
    P2MovesTypes = [];
    P2MovesValues = [];

    P1TotalScore = 0;
    P2TotalScore = 0;
    return winner;
}
