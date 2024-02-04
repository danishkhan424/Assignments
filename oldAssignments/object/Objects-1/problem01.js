/*                ## **Problem-1 User Age Filter**

            - Given a list of user data with name and age, 
            create a list of key-value pairs from the input
  - From the generated data, print the users whose age is more than 30 */



let Arr = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let ages = [32, 30, 26, 28, 44];

let data = [];
for (let i = 0; i < Arr.length; i++) {
  let obj = {};
  obj["name"] = Arr[i];
  obj["age"] = ages[i];
  data.push(obj);
}
let max = -Infinity;
let bag = "";
for (let i = 0; i < data.length; i++) {
  if (data[i].age > 30) {
    bag += data[i].name + " ";
  }
}console.log(bag);
