let myForm = document.querySelector('form');
let Task = document.getElementById('task');
let Priority = document.getElementById('priority');
let tbody = document.querySelector('tbody')
let myData = [];
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = {};

    data.task = Task.value;
    data.priority = Priority.value;

    myData.push(data);
    tbody.innerHTML = null;

    myData.map((ele) => {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        td1.innerText = ele.task;
        td2.innerText = ele.priority;
        if (ele.priority == "High") {
            row.style.backgroundColor = "red";
            row.style.color = "white";
        } else {
            row.style.backgroundColor = "green";
            row.style.color = "white";
        }
        row.append(td1, td2);
        tbody.append(row);
    });
});