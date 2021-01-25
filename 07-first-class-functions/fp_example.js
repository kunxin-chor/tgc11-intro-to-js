const prompt = require('prompt-sync')()

// process will be a reference variable to a function
function processTwoNumbers(x, y, process) {
    return process(x, y);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x -y;
}

function doNothing(x,y) {
    return 0;
}
let processes = {
    'a': add,
    's': subtract
}

let determineProcess = function(choice) {
    let selectedProcess = processes[choice];
    return selectedProcess
}

let choice = prompt("Enter a for addition, s for subtraction: ")
let n1 = parseInt(prompt("Enter the first number: "));
let n2 = parseInt(prompt("enter the second number: "));

console.log(processTwoNumbers(n1, n2, selectedProcess));

/*
console.log(processTwoNumbers(parseInt(prompt("Enter the first number: ")),
     parseInt(prompt("enter the second number: ")),
    determineProcess(prompt("Enter a for addition, s for subtraction: "))));
*/


