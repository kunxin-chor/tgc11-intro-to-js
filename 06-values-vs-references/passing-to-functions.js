function plusOne(x) {
    x++;
}

function addOneToBack(n) {
    n.push(-1);
}

let x = 42;
plusOne(x);
console.log(x);

let n=[1,2,3];
addOneToBack(n);
console.log(n);

function increaseAgeBy1(p) {
    p.age++;
}

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 33
}

increaseAgeBy1(person);