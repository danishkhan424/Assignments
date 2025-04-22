let numbers = prompt("Enter a series of numbers (separated by commas):");
checkNumber(numbers)
function checkNumber(numbers) {
    numbers = numbers.split(",").map(Number);

    let validInput = true;

    numbers.forEach(num => {
        if(isNaN(num)){
            validInput = false;
            alert("Invalid input. Please enter valid numbers.");
            return;
        }
    });

    if(validInput) {
        sumNumbers(...numbers);
    }

}

function sumNumbers(...numbers){
    let sum = 0;
    for (let i of numbers) {
        sum += i; 
    }
    console.log(sum);
}