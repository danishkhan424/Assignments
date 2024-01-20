let buttons = document.querySelectorAll("#buttons button");
let enter = document.getElementById("enter");
let display = document.getElementById("display");
let input = document.getElementsByTagName("input");
let min = Number(input[0].value);
let max = Number(input[1].value);
let num = "";
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    num += buttons[i].innerText;
    display.innerText = num;
  });
}
enter.addEventListener("click", () => {
  num = Number(num);
  if (num < min) {
    input[0].value = num;
  } else if (num > max) {
    input[1].value = num;
  }
});
