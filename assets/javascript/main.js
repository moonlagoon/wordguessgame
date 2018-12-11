var wordList = [
    "pikachu",
    "sky",
    "coding",
    "cat",
  ];

  var answer = "";

  // grabbing random word from wordList

  let random = wordList[Math.floor(Math.random()*wordList.length)];
  console.log(random)

 document.getElementById("word").innerHTML = "";

 // grabbing from html

for (let i = 0; i < random.length; i++) {
  document.getElementById("word").innerHTML += "_";
}

// everytime you push key it registers

document.onkeyup = function(event) {
  let userInput = event.key;
 
for (let i = 0; i < random.length; i++) {
  
  if(random[i].charAt() == userInput) {
  // replaces underscore with key inputted if correct
    answer = document.getElementById("word").innerHTML;
    answer = answer.replaceAt(i , userInput);
    console.log(answer)
    document.getElementById("word").innerHTML = answer;

  }
  
}










  
};

String.prototype.replaceAt=function(index, replacement) {
  return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
