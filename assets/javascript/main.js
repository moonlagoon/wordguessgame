const wordList = [
    "pikachu",
    "sky",
    "coding",
    "cat",
    "christmas",
    "guitar",
    "apple"
  ];

  let wins = 0,
    losses = 0

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

// lists all letters user types in





// changes and tells the amount of characters in each word






// how many turns you have left






// if the players wins




// if the player loses










  
};

String.prototype.replaceAt=function(index, replacement) {
  return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
