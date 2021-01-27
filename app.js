var Btn1 = document.querySelector("#btn1");
var Btn2 = document.querySelector("#btn2");
var Input = document.querySelector("#input");
var outputDiv = document.querySelector("#output");
function clickH1() {
  var userInput = Input.value;
  outputDiv.innerHTML = parseInt(userInput) + 1;
}
function clickH2() {
  var userInput = Input.value;
  outputDiv.innerHTML = parseInt(userInput) - 1;
}

Btn1.addEventListener("click", clickH1);
Btn2.addEventListener("click", clickH2);
