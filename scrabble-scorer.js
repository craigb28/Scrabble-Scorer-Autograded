// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let oldScrabbleScorer = function oldScrabbleScorer(word="word") {
   word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt(playersWord="word") {
   playersWord = input.question("Let's play some scrabble! \nEnter a word to score: ");
   return playersWord;
};

function simpleScorer(word="word") {
   let score = word.length
   return score;
};

function vowelBonusScorer(word="word") {
   let vowelBonusPoints = 0;
  
   for (let i=0; i<=word.length-1; i++){
      let vowelArray = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
      if (vowelArray.includes(word[i])){
         vowelBonusPoints = vowelBonusPoints + 3;
      }else{
         vowelBonusPoints = vowelBonusPoints + 1;
      }
   }
   return vowelBonusPoints;
};

let scrabbleScorer = "old score";

const scoringAlgorithms =[
   {name:"Simple Score", 
      description:"Each letter is worth 1 point.", 
      scorerFunction:simpleScorer()}, 
   {name:"Bonus Vowels",
      description:"Vowels are 3 pts, consonants are 1 pt.",
      scorerFunction:vowelBonusScorer()},
   {name:"Scrabble",
      description:"The traditional scoring algorithm.",
      scorerFunction:scrabbleScorer} // Update this when Scrabblescorer is updated
   ];

function scorerPrompt() {
   console.log(
   `Which scoring algorithm would you like to use?
      0 - Simple: One point per character
      1 - Vowel Bonus: Vowels are worth 3 points
      2 - Scrabble: Uses scrabble point system`);
      scorerPromptResponse = input.question("Enter 0, 1, or 2: ")
   let scoringMethodToUse = scoringAlgorithms[scorerPromptResponse];
   return scoringMethodToUse; //this returns an object from the array
};

function transform(obj) {


};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let playersWord = initialPrompt();
   let scoringMethodToUse = scorerPrompt();
   console.log(`Your word is ${playersWord}. \nYour score is ${scoringMethodToUse.scorerFunction}.`)
   //console.log(`Here is your score: ${score}`);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
