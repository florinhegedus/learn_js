"use strict";

let n = 10;

// iterate over the numbers up to n
for (let num=2; num<n; num++) {
    // check if the number is prime
    let prime = true;
    for (let d = 2; d <= num/2; d++) {
        if (num % d == 0) {
            prime = false;
        }
    }
    if (prime) {
        console.log(num);
    }
}