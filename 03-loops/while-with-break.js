const prompt = require('prompt-sync')();

// ask the user for an integer
// if the integer is positive, stop asking the user
let number = 0;
while (true) {
    number = prompt("Please enter a positive number: ")
    if (number >0) {
        break;
    }
}
console.log("Thank you for your number")
console.log(number);