let naam = document.getElementById("name");
let age = document.getElementById("age");
let tbody = document.querySelector("tbody")
let td1 = document.createElement("td");
let td2 = document.createElement("td");

let display = (e) => {
  // e.preventDefault()
  localStorage.setItem("Name", naam.value);
    localStorage.setItem("Age", age.value);
    alert("Submitted Successfully")
};

let displaydata = () => {

    td1.innerText = localStorage.getItem("Name")
    td2.innerText = localStorage.getItem("Age")
    tbody.append(td1,td2)
}
let reload = () => {
    localStorage.clear()
    window.location.reload()
}
