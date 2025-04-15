// Enter number of rows (1-10): 5

let userInput = 5;

for (let i = 1; i <= userInput; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    if(j % 3 === 0){
      continue
    }
    else if(j % 7 === 0){
      break;
    }
    str += j + " ";
  }
  console.log(str);
}