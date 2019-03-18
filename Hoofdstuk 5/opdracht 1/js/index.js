/*function tienTallen(){
  var getal = 10;
  for (var i = 10; i >= 0; i--) {
    document.getElementById('divResult').innerHTML += "Het resultaat van " + i + "x" + getal + "=" + getal*i + "<br>";
  }
  //2. Doe het bovenstaande ook met een while statement
  let teller = 10;
  while (getal*teller!=0) {
    document.getElementById('divResult').innerHTML += "Het resultaat van " + teller + "x" + getal + "=" + getal*teller + "<br>";
    teller--;
  }
}*/

//3. Toon de eigenschappen van het object window.document
//3.1. Herschrijf de functie zodanig dat alleen de eerste 10 eigenschappen getoond worden.
/*function toonDocument(){
  let teller = 0;
  for (var i in window.document) {
    if(teller > 10){
      break;
    }
    document.getElementById('divResult').innerHTML += i + ": " + window.document[i] + "<br>";
    teller++;
    console.log(teller);
  }
}*/

//4. Herschrijf de functie zodanig dat de eigenschappen van een zelfgemaakte object worden getoond.
var studenten = [];
class Student {
  constructor(naam, klas, leeftijd) {
    this.naam = naam;
    this.klas = klas;
    this.leeftijd = leeftijd;
  }

  printKlasgenoot(){
    document.getElementById('divResult').innerHTML += "Naam: " + this.naam + "<br>" + "Klas: " + this.klas + "<br>" + "Leeftijd: " + this.leeftijd + "<hr>";
  }
}
window.addEventListener('load', function(){
  studenten.push(new Student("Rowan","1h", 19));
  studenten.push(new Student("Vito","1h", 17));
});

//5. Zet alle elementen van window.navigator in een array, sorteer deze en toon ze op het scherm.
function windowArray(){
  var mijnArray = [];
  for (var i in window.navigator) {
    mijnArray.push(window.navigator[i]);
  }
  mijnArray.sort();
  for (var i in mijnArray) {
    document.getElementById('divResult').innerHTML += i + ": " + mijnArray[i] + "<br>";
  }
}

//6. Herschrijf for statements naar while lussen.
//a:
var i = 8;
while (i > 0) {
  document.getElementById('divResult').innerHTML = i + '<br>';
  i--;
}
//b:
var i = 1;
while (i <= 99) {
  i /= 1.5;
  i*2;
}
//c:
var nummer = 0;
while (nummer <= 100) {
  if(nummer == 77){
    break;
  }
  nummer++;
}
