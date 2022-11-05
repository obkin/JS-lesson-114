"use strict";

let k = 0;

function count() {
    for (let i = 0; i < 1e9; i++) {
        k++;
    }
    console.log('done');
}

count();