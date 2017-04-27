// var fs = require('fs');
// var basicCards = JSON.parse(fs.readFileSync('cloze.json', 'utf8'));

var ClozeCard = function(text, cloze){
	this.text = text;
	this.cloze = cloze;
	

	this.getPartialText = function(){

		var splittedText = [];
		splittedText = this.text.split(" ");

		var splittedCloze = [];
		splittedCloze = this.cloze.split(" ");

		var move = splittedCloze.length;
		// console.log(move);

		var partialText = [];
		var j = -1;
		// console.log(splittedText);
		// console.log(splittedCloze);
		for(var i=0; i<splittedText.length; i++){
			
				if(splittedText[i] === splittedCloze[j+1]){
					j++;
				}
				else{
					partialText.push(splittedText[i]);
					if(j === -1){
						console.log("Error: Cloze dose not exisit...");
						break;
					}
				}
		}
		return partialText.join(" ");
	}
	this.partial = this.getPartialText;
	
};

var x = new ClozeCard();
x.text = "Hello my name is blah blah";
x.cloze = "my name";
console.log(x.partial);

module.exports = ClozeCard;
