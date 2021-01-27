var Btn1 = document.querySelector("#btn1");
var Btn2 = document.querySelector("#btn2");

var outputDiv = document.querySelector("#output");
function clickH1() {
  var startingV = 0;

  var newV = startingV + 1;
  outputDiv.innerHTML = newV;
  newV = newV + 1;
}
function clickH2() {
  var startingV = 0;

  var newV = startingV - 1;
  outputDiv.innerHTML = newV;
  newV = newV - 1;
}

Btn1.addEventListener("click", clickH1);
Btn2.addEventListener("click", clickH2);
