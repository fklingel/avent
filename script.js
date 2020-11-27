// Array's containing the elements of the "ultimate insult generator: https://i.imgur.com/wqDtqUj.jpg
// Test
window.onload = function(){ 
var firstA =["somptueuse", "magnifique","sublime", "incroyable", "savante", "maligne", "audacieuse","radieuse" ,"talentueuse", "galante", "passionante", "formidable", "sympathique", "admirable", "intelligente", "habile", "époustouflante", "ingénieuse", "passionante", "captivante", "chaleureuse", "brave", "audacieuse", "amusante", "pétillante", "divine", "vaillante"];

var secondA =["femme", "amante", "déesse", "reine", "princesse", "vétérinaire", "nageuse", "coureuse", "gemme", "pépite", "biche", "étoile", "source de bonheur", "compagne", "partenaire", "sauveuse d'animaux", "lumière de ma vie", "épaule sur laquelle se reposer", "sainte", "inspiration", "génie", "merveille de mon monde", "perle", "gardienne de mes rêves", "nantaise"];

var buttonClick = document.getElementById("complimentGenerator");

var buttonResetClick = document.getElementById("compimentReset");

buttonClick.onclick = function() {
   document.getElementById("complementArea").innerHTML = " ";
   // getting random values from each array
  var randFirst = firstA[Math.floor(Math.random() * firstA.length)];

  var randSecond = secondA[Math.floor(Math.random() * secondA.length)];
  
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
  
    buttonClick.innerHTML = "Je ne cesserai de te complimenter!";

};

//clearing html of any existing compliments  
buttonResetClick.onclick = function resetCompliment() {
    document.getElementById("complementArea").innerHTML = " ";  
};
};
