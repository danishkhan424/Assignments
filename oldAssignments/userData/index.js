let btn = document.getElementById("getDataBtn");
let display = document.getElementById("display");

btn.addEventListener("click", () => {
  // fetch("https://reqres.in/api/users")
  //   .then((responce) => responce.json())
  //     .then((data) => {
  //     displayData(data.data);
  //   });
  async function userData() {
    try {
      let responce = await fetch("https://reqres.in/api/users");
      let data = await responce.json();
      displayData(data.data);
    } catch {
      console.log(err);
    }
  }
  userData();
});

function displayData(data) {
  data.forEach((obj) => {
    let card = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("h3");
    let email = document.createElement("a");
    email.href = obj.email;
    email.textContent = "Email";
    name.textContent = obj.first_name + obj.last_name;
    img.src = obj.avatar;
    card.append(img, name, email);
    display.append(card);
  });
}
