const prompt = require('prompt-sync')()

// uses parseInt to convert string to integers
let n1 = parseInt(prompt("Please enter the first number: "));
let n2 = parseInt(prompt("Please enter the second number: "));

let total = n1 + n2;
console.log(total);

let pi = 3.14;
let radius = parseFloat(prompt("Please enter the radius of the circle: "))
let area = radius * pi ** 2;
console.log("Area of circle=" + area.toString());

console.log(typeof(area))
