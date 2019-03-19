window.addEventListener('load', function(){
  var divResult = document.getElementById('divResult');
  for (var e in window.mousemove) {
    divResult.innerHTML += e + "<br>";
  }
})
