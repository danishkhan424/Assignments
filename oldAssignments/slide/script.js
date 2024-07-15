let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let arr = [
  { url: "images/image1.jpg" },
  { url: "images/image2.jpg" },
  { url: "images/image3.jpg" },
  { url: "images/image4.jpg" },
  { url: "images/image5.jpg" },
  { url: "images/image6.jpg" },
  { url: "images/image7.jpg" },
  { url: "images/image8.jpg" },
  { url: "images/image9.jpg" },
  { url: "images/image10.jpg" },
  { url: "images/image11.jpg" },
  { url: "images/image12.jpg" },
  { url: "images/image13.jpg" },
  { url: "images/image14.jpg" },
  { url: "images/image15.jpg" },
  { url: "images/image16.jpg" },
  { url: "images/image17.jpg" },
  { url: "images/image18.jpg" },
  { url: "images/image19.jpg" },
  { url: "images/image20.jpg" },
  { url: "images/image21.jpg" },
  { url: "images/image22.jpg" },
  { url: "images/image23.jpg" },
  { url: "images/image24.jpg" },
  { url: "images/image25.jpg" },
  { url: "images/image26.jpg" },
  { url: "images/image27.jpg" },
  { url: "images/image28.jpg" },
  { url: "images/image29.jpg" },
];

const img = document.createElement("img");

let i = 0;
let time;
buttons.forEach((btn) => {
  if (btn.innerText == "Start") {
    btn.addEventListener("click", () => {
      time = setInterval(() => {
        img.src = arr[i].url;
        display.append(img);
        i++;
        if (i === arr.length) {
          i = 0;
        }
      }, 2500);
    });
  }
  if (btn.innerText == "Stop") {
    btn.addEventListener("click", () => {
      clearInterval(time);
    });
  }
  if (btn.innerText == "Next") {
    btn.addEventListener("click", () => {
      clearInterval(time);
      if (i >= 0 && i < arr.length - 1) {
          i++;
          img.src = arr[i].url;
          display.append(img);
      } else {
          i = 0;
          img.src = arr[i].url;
          display.append(img);
      }
    });
  }
  if (btn.innerText == "Preview") {
    btn.addEventListener("click", () => {
      clearInterval(time);
        if (i < arr.length && i > 0) {
            i--;
            img.src = arr[i].url;
            display.append(img);
        } else {
            i = arr.length-1;
            img.src = arr[i].url;
            display.append(img);
      }
    });
  }
});
