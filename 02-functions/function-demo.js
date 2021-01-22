"use strict";
const prompt = require('prompt-sync')();

function calculateAreaOfCircle(radius) {
    return 3.14 * radius ** 2;
} // end calculateAreaOfCircle()


let radius = parseFloat(prompt("Please enter the radius"));
let area = calculateAreaOfCircle(radius);
console.log("Area of circle =", area);