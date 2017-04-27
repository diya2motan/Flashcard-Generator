var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");
var fs = require('fs');


var basicCards = JSON.parse(fs.readFileSync('basic.json', 'utf8'));
var clozeCards = JSON.parse(fs.readFileSync('cloze.json', 'utf8'));

console.log(basicCards[0].back);
// console.log(basicCards);
// console.log(clozeCards);

var userInput = process.argv[2];

if(userInput === "basic"){
	// basic cards inquirer
inquirer.prompt([
    {
      	type: "input",
      	name: "first",
      	message: "Who was the first president of the United States?"
    },
    {
    	type: "input",
      	name: "second",
      	message: "It was an agreement signed by British and Americans, what is it?"
    },
    {
    	type: "input",
      	name: "third",
      	message: "What is the capital of Italy?"
    },
    {
    	type: "input",
      	name: "forth",
      	message: "Where is it illegal to eat mince pies on Christmas Day!?"
    }

  ]).then(function(userAnswer) {
  	// if(userAnswer.first === basicCards.)
  	console.log(userAnswer);
  });
}
else if(userInput === "cloze"){
	// cloze cards inquirer
inquirer.prompt([
    {
      	type: "input",
      	name: "first",
      	message: "Who was the first president of the United States?"
    },
    {
    	type: "input",
      	name: "second",
      	message: "It was an agreement signed by British and Americans, what is it?"
    },
    {
    	type: "input",
      	name: "third",
      	message: "What is the capital of Italy?"
    },
    {
    	type: "input",
      	name: "forth",
      	message: "Where is it illegal to eat mince pies on Christmas Day!?"
    }

  ]).then(function(userAnswer) {
  	console.log(userAnswer);
  });
}
else{
	console.log("Enter a valid input please!! ==> Either basic or cloze.");
}








// var userInput = process.argv;
// var flashCardKind = userInput[2];

// if(flashCardKind === "BasicCard"){
// 	var cardFront = userInput[3];
// 	var cardBack = userInput[4];
// 	var newBasciCard = new BasicCard(front, back);
// }
// else if(flashCardKind === "ClozeCard"){
// 	var cardText = userInput[3];
// 	var cardCloze = userInput[4];
// 	var newClozeCard = new ClozeCard(cardText, cardCloze);
// }
// else{
// 	console.log("Enter a valid input please!!");
// }

// var x = new ClozeCard("George Washington was the first president of the United States.", "hello");
// x.getPartialText();
// console.log(x.text);
// console.log(x.cloze);
// console.log(x.partial);