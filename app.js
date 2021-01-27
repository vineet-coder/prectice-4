var Btn1 = document.querySelector("#btn1");
var Btn2 = document.querySelector("#btn2");
var Input = document.querySelector("#input");
var outputDiv = document.querySelector("#output");
var sum = 0;
function clickH1() {
  var userInput = Input.value;
  console.log(userInput);

  sum = parseInt(userInput) + 1;
  console.log(sum);

  outputDiv.innerHTML = sum;
}
function clickH2() {
  var userInput = Input.value;

  sum = parseInt(userInput) - 1;
  console.log(sum);

  outputDiv.innerHTML = sum;
}

Btn1.addEventListener("click", clickH1);
Btn2.addEventListener("click", clickH2);
