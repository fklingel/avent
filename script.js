// Array's containing the elements of the "ultimate insult generator: https://i.imgur.com/wqDtqUj.jpg
// Test
window.onload = function(){ 
var firstA =["lazy", "stupid","insecure", "idiotic", "slimy", "slutty", "smelly", "pompous", "communist", "dicknose", "pie-eating", "racist", "elitist", "white trash", "drug-loving", "butterface", "tone deaf", "ugly", "creepy"];

var secondA =["douche", "ass", "turd", "rectum", "butt", "cock", "shit", "crotch", "bitch", "turd", "prick", "slut", "taint", "fuck", "dick", "boner", "shart", "nut", "sphincter"];

var thirdA =["pilot", "canoe", "captian", "pirate", "hammer", "knob", "box", "jockey", "nazi", "waffle", "goblin", "blossom", "biscuit", "clown", "socket", "monster", "hound", "dragon", "balloon"];

var buttonClick = document.getElementById("complimentGenerator");

var buttonResetClick = document.getElementById("compimentReset");

buttonClick.onclick = function() {
   document.getElementById("complementArea").innerHTML = " ";
   // getting random values from each array
  var randFirst = firstA[Math.floor(Math.random() * firstA.length)];

  var randSecond = secondA[Math.floor(Math.random() * secondA.length)];

  var randThird = thirdA[Math.floor(Math.random() * thirdA.length)];
  
  // capitalizing the first letter
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
    }
  
  randFirstCapital = randFirst.capitalize();
  
  //adding complement back to the html
  var addCompliment = document.getElementById("complementArea");
 
  var newMessage = "\n" + randFirstCapital + " " + randSecond + " " + randThird + "!\n" + "";
  
  complementArea.innerHTML = complementArea.innerHTML + newMessage;
  // after first compliment payed - button txt changes
  
    buttonClick.innerHTML = "I shall compliment you a second time!";

};

//clearing html of any existing compliments  
buttonResetClick.onclick = function resetCompliment() {
    document.getElementById("complementArea").innerHTML = " ";  
};
};
