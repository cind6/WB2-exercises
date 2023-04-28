"use strict";

let a = 5;
let b = 10;
let c = 3;

let smallest = a;
let largest = a;

if (b < smallest) {
  smallest = b;
}

if (c < smallest) {
  smallest = c;
}

if (b > largest) {
  largest = b;
}

if (c > largest) {
  largest = c;
}

console.log("The smallest number is " + smallest);
console.log("The largest number is " + largest);
