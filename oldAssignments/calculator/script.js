let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let arr = Array.from(buttons);
let box = "";

arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      box = eval(box);
      display.value = box;
    } else if (
      e.target.innerHTML == "") {
      box = box.substring(0, box.length - 1);
      display.value = box;
    } else if (e.target.innerHTML == "AC") {
      box = "";
      display.value = box;
    } else if (e.target.innerHTML == "%") {
        box = eval(box) / 100;
        display.value = box;
    } else {
      box += e.target.innerHTML;
      display.value = box;
    }
  });
});
