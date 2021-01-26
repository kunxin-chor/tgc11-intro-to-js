let numbers = [3, 5, 10, 22, 35];

// before we start processing, sum is 0
let sum = 0;

for (let n of numbers) {

    sum += n;
    // math explanation of invaraint: at the end of the loop, sum should be n[0] + n[i-1], where i is the
    // current iteration
    // OR
    // sum should be current running total up to this point in the loop
}

// invaraint: sum should be the result of all numbers added together