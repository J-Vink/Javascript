//1. Schrijf een dunctie die de booschap "Hello world" schrijft.
/*2. Breid de functie zodanig uit dat een variabele (met willekeurige tekst)
      die in het script is gedefinieerd op het scherm wordt geschreven.*/
/*3. Laat een ingevoerde tekst zien op het scherm*/
window.addEventListener('load',function(){
  alert(prompt("Voer een tekst in:"));
});
/*4.Maak een functie die 2 getallen(die verzameld zijn via 2 parameters) optelt.*/
/*Pas de fnctie zodanig aan dat er via een prompt de getallen worden opgevraagd.*/
optellen(prompt("Voer het eerste getal in:"),prompt("Voer het tweede getal in:"));
function optellen(a,b){
  alert("De opsomming van " + a + " + " + b + " = " + (parseInt(a)+parseInt(b)));
}

/*6.Schrijf een functie die weergeeft met hoeveel parameters hij is aangeroepen.*/
parameters(41243, 4312412, 4324,33,1,7,87,0);
function parameters(){
  alert(arguments.length);
}

/*7. Schrijf een Array met namen van klasgenoten*/
var klasgenoten = ["Vito","Rowan","Delani","Kiran","Ahmed"];
aantalKlasgenoten();
gedeelte();
sorteer();
//7.1. Schrijf naar het scherm hoeveel elementen er in de array zit.
function aantalKlasgenoten(){
  alert(klasgenoten.length);
}
//7.2. Schrijf het eerste, derde en vijfde element naar het scherm.
function gedeelte(){
  alert(klasgenoten[0] + "\n" + klasgenoten[2] + "\n" + klasgenoten[4]);
}
//7.3. Sorteer de array op alfabetische volgorde, en toon het op het scherm.
function sorteer(){
  alert(klasgenoten.sort());
}
//7.4. Vraag met promp een extra naam, en voeg deze toe aan de array. Schrijf het resultaat naar het scherm.
klasgenoten.push(prompt("Voeg een klasgenoot toe:"));
alert(klasgenoten[(klasgenoten.length-1)]);
//7.5. Voeg de array samen naar een string en toon deze op het scherm.
var textKlasgenoten = klasgenoten.join('-');
alert(textKlasgenoten);

//8.Sorteer de array hoofdletteronafhankelijk
klasgenoten.sort(function(a,b){
  return a.toLowerCase().localeCompare(b.toLowerCase())
});
alert(klasgenoten);

//9. Maak een object auto, met de eigenschappen: merk, model, aantal deuren en bouwjaar.
class Auto {
  constructor(merk, model, deuren, bouwjaar){
    this.merk = merk;
    this.model = model;
    this.deuren = deuren;
    this.bouwjaar = bouwjaar;
  }

  printAuto(){
    alert("Merk: " + this.merk + "\n"
    + "Model: " + this.model + "\n"
    + "Deuren: " + this.deuren + "\n"
    + "Bouwjaar: " + this.bouwjaar);
  }

  printPrijs(){
    alert("De prijs van deze auto is: &euro; 3499,-");
  }
}

let auto = new Auto("Opel", "Corsa", 5, 1999);
auto.printAuto();
auto.printPrijs();
var mijnNieuweAuto = new Auto("Mercedes", "500SL", 5, 2014);
mijnNieuweAuto.printAuto();

//Opdracht 11 is overbodig sinds de class functie hedendaagd ondersteund wordt door de meestgebruikte browsers.
