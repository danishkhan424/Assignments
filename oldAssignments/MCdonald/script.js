const coke = document.getElementById("coke");
const noodles = document.getElementById("noodles");
const pizza = document.getElementById("pizza");
const burger = document.getElementById("burger");
const pasta = document.getElementById("pasta");
const images = document.querySelectorAll("img");
const cokeImg = images[0];
const noodleImg = images[1];
const pizzaImg = images[2];
const burgerImg = images[3];
const pastaImg = images[4];
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

function styleImg(img) {
  img.style.display = "block";
}

let order = document.getElementById("order");
order.addEventListener("click", (e) => {
  e.preventDefault();
  const cokeTick = coke.checked;
  const noodlesTick = noodles.checked;
  const pizzaTick = pizza.checked;
  const burgerTick = burger.checked;
  const pastaTick = pasta.checked;


  let food = new Promise((res, rej) => {
    const randomSeconds = Math.floor(Math.random() * 10) + 1;
    if (randomSeconds > 2) {
      setTimeout(() => {
        res("Order successfully");
        if (cokeTick == true) {
          styleImg(cokeImg);
        }
        if (noodlesTick == true) {
          styleImg(noodleImg);
        }
        if (pizzaTick == true) {
          styleImg(pizzaImg);
        }
        if (burgerTick == true) {
          styleImg(burgerImg);
        }
        if (pastaTick == true) {
          styleImg(pastaImg);
        }
      }, randomSeconds * 1000);
    } else {
      rej("Order has been rejected");
    }
  });
  food
    .then((res) => {
      h2.innerText = "Enjoy Your Meal...!";
      const orderId = Math.floor(Math.random() * 100000000);
      h3.innerText = `#Order id: ${orderId}`;
      h3.style.marginLeft = "410px";
    })
    .catch((err) => {
      h2.innerText = "Order failed: Restaurant is full";
    });
  h2.innerText = `Your order is preparing`;
});
