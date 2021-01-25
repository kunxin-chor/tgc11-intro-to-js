const prompt = require('prompt-sync')()

let filename = prompt("Please enter the filename: ");

// let extension = filename.slice(-3);
// console.log(extension);

// IF we assume the extension is always three character
// let start = filename.length - 3;
// console.log(filename.slice(start))

// let dotIndex = filename.indexOf('.');
// console.log(filename.slice(dotIndex+1))

let dotIndex = filename.lastIndexOf('.');
console.log(filename.slice(dotIndex+1));