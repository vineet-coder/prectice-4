var Btn1 = document.querySelector("#btn1");
var Btn2 = document.querySelector("#btn2");
var Input = document.querySelector("#input");
var outputDiv = document.querySelector("#output");
var sum = 0;
var userInput = Input.value;
function clickH1() {
  sum = userInput + 1;
  outputDiv.innerHTML = sum;
}
function clickH2() {
  sum = userInput - 1;
  outputDiv.innerHTML = sum;
}

Btn1.addEventListener("click", clickH1);
Btn2.addEventListener("click", clickH2);
