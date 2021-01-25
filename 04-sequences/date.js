const prompt = require('prompt-sync')()

let date = prompt("Please ente the date in the DD-MM-YYYY format");
// let day = date.slice(0, 2);
// let month = date.slice(3, 5);
// let year = date.slice(6)

// console.log("Day -", day);
// console.log("Month -", month);
// console.log("Year -", year);

let dateComponents = date.split('-');
console.log(dateComponents)
console.log("Day -", dateComponents[0]);
console.log("Month -", dateComponents[1]);
console.log("Year -", dateComponents[2])