var a = prompt("Voer een getal in:");
var b = prompt("Voer een getal in:");
// Toon de opsomming in hele getallen:
// alert("De opsomming van deze twee getallen is: " + (parseInt(a) + parseInt(b)));

// Toon de opsomming met ondersteuning voor kommagetallen:
// alert("De opsomming van deze twee getallen is: " + (parseFloat(a)+parseFloat(b)));

// Toon het grootste getal:
// alert("Het grootste van de twee getallen is: " + ((a > b)? a:b));

// Laat op 1 regel zien of a groter/kleiner is dan b:
// alert(a + " is " + ((a > b)? "groter dan ":"kleiner dan ") + b);

// Laat zien of de getallen groter of kleiner zijn dan elkaar, of juist gelijk:
var groterKleiner = (a > b)
  ? "groter dan":
    (parseInt(a) == parseInt(b))? "gelijk aan"
      : "kleiner dan";
alert(a + " is " + groterKleiner + " " + b);
