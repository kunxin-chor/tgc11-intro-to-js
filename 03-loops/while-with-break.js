const prompt = require('prompt-sync')();

// ask the user for an integer
// if the integer is positive, stop asking the user
// have to declare the number variable because we want to use it after the while loop
let number = 0;
while (true) {
    number = prompt("Please enter a positive number: ")
    if (number >0) {
        break;
    }
}
console.log("Thank you for your number")
console.log(number);