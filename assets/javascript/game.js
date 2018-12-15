const wordList = ["nintendo", "sega", "mario",
     "luigi", "pikachu", "charizard", "link", 
     "zelda", "sonic", "gamecube", "controller", 
     "coin", "pokeball", "pokemon", "gameboy", "", "unearth", 
     "devildriver", "municipal waste", "skeletonwitch", "power trip", 
     "soulfly", "cannibal corpse"];


//create a function that picks a random index of array wordList
let random = wordList[Math.floor(Math.random()*wordList.length)];
  console.log(random)

let chosenWord = wordList[random];
console.log(chosenWord);
let remainingGuesses = 10;
let wins = 0;
let losses = 0;
let underScores = [];
let lettersOfWord = [];
let rightLetter = [];
let wrongLetter = [];
let usedLetters = [];


//create a function that resets the game
let newGame = () => {

 losses = 0;
 usedLetters = [];
 rightLetter = [];
 wrongWord = [];
 remainingGuesses = 10;
 let newWord = wordList[random];
}

// generate underscores based on word length
var placeHolder = "";

  // grabbing random word from wordList

  let random = wordList[Math.floor(Math.random()*wordList.length)];
  console.log(random)

 document.getElementById("word").innerHTML = "";

 // grabbing _ space from html and changes in size based on random word

for (let i = 0; i < random.length; i++) {
  document.getElementById("word").innerHTML += "_";
}

// everytime you push key it registers

document.onkeyup = function(event) {
  let userInput = event.key;
 
for (let i = 0; i < random.length; i++) {
  
  if(random[i].charAt() == userInput) {
  // replaces underscore with key inputted if correct
    placeHolder = document.getElementById("word").innerHTML;
    placeHolder = placeHolder.replaceAt(i , userInput);
    console.log(placeHolder)
    document.getElementById("word").innerHTML = placeHolder;

  }
  
}

//get user guess by capturing keypress

document.addEventListener("keypress", (event) => {

 //get key code
 let keycode = event.keyCode;
 //convert keycode to letter
 let userInput = String.fromCharCode(keycode);
 console.log(userInput);
 lettersOfWord = chosenWord.split("");
 // if user is right
 if (chosenWord.indexOf(userInput) > -1) {
   //push to right word array
   rightLetter.push(userInput)

   //display correct letters

   //document.getElementById("underscores").innerHTML = (rightLetter.join(""));



   //check if user wins

   if (chosenWord === rightLetter.join("")) {
     wins++;
     document.getElementById("wins").textContent = (wins);
     alert("YOU WIN!")
     newGame();
   }


   //if user choses wrong letter
 }
 else {
   //push to wrong word array
   wrongLetter.push(userInput);
   console.log(wrongLetter);
   //push to letters to used letters array
   usedLetters.push(wrongLetter);
   document.getElementById("used-letters").textContent = (wrongLetter);


   remainingGuesses--;
   //display to dom
   document.getElementById("guesses-remaining").textContent = (remainingGuesses);
   //if user runs out of guesses
   if (remainingGuesses === 0) {

     alert("Lost! ")
     losses++;
     document.getElementById("losses").textContent = (losses);
     newGame();
   }

 }