// objects allow us to store multiple values in a variable name
// BUT arrays can do the same thing, then we need objects?
// because object store key/value pairs. The index (aka the key) can be a string or integer
let product = {
    "name": "ACME Hammer",
    "price": 300,
    "stock": 15,
    "average-ratings": 4.5,
    "supplier address":"Ang Mio Kio Street 21"
} // curly braces means object

// to retrieve the value from on object, we refer to its key (aka: property)
console.log(product["name"]);

// second more common way to retrieve a value object by attribute:
console.log(product.name);

// can only use the . operator if the attribute is a valid javascript variable name
// if the attribute is not a valid javascript variable name, then have to use square brackets
console.log(product["average-ratings"]);
console.log(product["supplier address"]);