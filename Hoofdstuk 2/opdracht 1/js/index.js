var str1 = "De eerste string";
var str2 = "De tweede string";
var str3 = "De derde string";
console.log(str1);
console.log(str2);
console.log(str3);
var langeString = str1 + " " + str2 + " " + str3;
console.log(langeString.charAt(0));
console.log(langeString.charAt(5));
console.log(langeString.charAt(10));
console.log(langeString.length);
//3. Vind op welke positie in de totale string de eerste spatie coorkomt.
console.log(langeString.indexOf(" "));
//Vraag aan de bezoeker een string in te voeren, zet daarna de invoer op het scherm, en laat ook zien op welke positie de eerste spatie voorkomt.
function vraag(){
  var invoer = prompt("Voer een zin in: ");
  document.getElementById('divResult').innerHTML = "U voerde in: " + invoer + "<br>"
    + "De eerste spatie komt voor op de " + (invoer.indexOf(" ")+1) + "<super>e</super> positie.";
}
