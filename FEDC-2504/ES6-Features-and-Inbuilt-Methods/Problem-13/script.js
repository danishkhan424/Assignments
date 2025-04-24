const people = [
    { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } },
    { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } }
  ];

let arrOfStr = [];
for(let person of people){
    let {name, address:{city, street:{name:streetName}}} = person;
    let str = `${name} lives in ${city} on ${streetName}`;
    arrOfStr.push(str);
}


console.log(arrOfStr);
