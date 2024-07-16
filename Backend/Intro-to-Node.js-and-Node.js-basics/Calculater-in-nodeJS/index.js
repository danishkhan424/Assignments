// index.js
//  import the crypto module
const crypto = require('crypto');

//  get a commands using process.argv
const [,,operation, ...args] = process.argv;

// complete the  function
function generateRandomNumber(length) {
    // using crypto to generate a random number
    return crypto.randomBytes(length).toString("binary");
}

switch (operation) {
    case "add":
        if (args.length !== 2) {
          console.log("Invalid number of arguments for addition");
          break;
        }
        const sum = parseFloat(args[0]) + parseFloat(args[1]);
        console.log(sum);
        break;
    case "sub":
        if (args.length !== 2){
            console.log("Invalid number of arguments for subtraction");
            break;
        }
        const difference = parseFloat(args[0]) - parseFloat(args[1]);
        console.log(difference);
        break;
    case "mult":
        if (args.length !==2){
            console.log("Invalid number of arguments for multiplication");
            break;
        }
        const product = parseFloat(args[0]) * parseFloat(args[1]);
        console.log(product);
        break;
    case "divide":
        if (args.length !== 2){
            console.log("Invalid number of arguments for division");
            break;
        }
        const quotient = parseFloat(args[0]) / parseFloat(args[1]);
        console.log(quotient);
        break;
    case "sin":
        if (args.length !== 1){
            console.log("Invalid number of arguments for sine");
            break;
        }
        const sine = Math.sin(parseFloat(args[0]));
        console.log(sine);
        break;
    case "cos":
        if (args.length !== 1){
            console.log("Invalid number of arguments for cosine");
            break;
        }
        const cosine = Math.cos(parseFloat(args[0]));
        console.log(cosine);
        break;
    case "tan":
        if (args.length !== 1){
            console.log("Invalid number of arguments for tangent");
            break;
        }
        const tangent = Math.tan(parseFloat(args[0]));
        console.log(tangent)
        break;
    case "random":
        if (args.length !== 1){
            console.log("Provide length for random number generation.");
            break;
        }
        const randomLength = parseInt(args[0]);
        if (isNaN(randomLength)){
            console.log("Invalid length for random number generation");
            break;
        }
        const randomNumber = generateRandomNumber(Math.ceil(randomLength/2));
        console.log(randomNumber);
        break;     
    default:
      console.log("Invalid operation");
  }
  