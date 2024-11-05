"use strict";

function readNumber() {
    let num;

    do {
        num = prompt("Enter a valid number", "0");
    } while( !isFinite(num));

    if (num === NaN || num === "") {
        return null;
    }

    return num;
}

alert(readNumber());