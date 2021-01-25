// declare and define an array
let numbers = [];  // square brackets means array
let words = new Array();
let rojak = [42, 'She sells seashells', true];

let fruits = ["apples", "bananas", "oranges"];

// add to the back of an existing array?
numbers.push(33);
numbers.push(34);
numbers.push(35);

// remove by an index
numbers.splice(1,1);
console.log(numbers);

// whether an element exists in an array
if (fruits.includes('bananas')) {
    console.log("Go bananas");
}

fruits[1] = 'Durians';
console.log(fruits);