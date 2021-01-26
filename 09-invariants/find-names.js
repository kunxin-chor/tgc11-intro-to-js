let names = ['Alan', 'John', 'Gary', 'Alexander', 'Grace'];
// find the name with the MOST characters

// before we start looking for the longest name, the longestName
// variable should be empty
let longestName = "";

for (let n of names) {

    if (longestName.length < n.length) {
        longestName = n;
    }

    // at the end of the loop, longestName should contain the longest name so far.
    // (that is, if we have compared 1 name, then longestName should be the first name)
    // (if we have compared two names, then longestName should be the longer of the two)
    // (if we have compared three names, then longestName should be the longest of the three)
}
// at the end of loop,longestName should be the name with the most characters
