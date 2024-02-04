let success = document.querySelector(".suc");
let failed = document.querySelector(".fail");
let processing = document.querySelector(".pro");
let payBtn = document.getElementById("payment");
let newPayment = document.getElementById("new")

payBtn.addEventListener('click', payment);

function payment() {
  function processUI() {
    processing.style.display = "block";
    payBtn.style.display = "none";
  }
  function successUI() {
    processing.style.display = "none";
    success.style.display = "block";
  }
  function failedUI() {
    processing.style.display = "none";
    failed.style.display = "block";
  }
  let payment = new Promise(function (res, rej) {
    setTimeout(() => {
      const success = Math.random() <= 0.5;
      success ? res() : rej();
    }, 1500);
  });

  function result() {
    processUI();

    payment
      .then(() => {
        successUI();
      })
      .catch(() => {
        failedUI();
      });
    setTimeout(() => {
      newPayment.style.display = "block";
    },2000)
  }

  result();

}
newPayment.addEventListener("click", () => {
  newPayment.style.display = "none";
  processing.style.display = "block";
  success.style.display = "none";
  failed.style.display = "none";
  setTimeout(() => {
    payment()
  },2000);
});

