"use strict";

// Define the pay rate and hours worked
let payRate = 10;
let hoursWorked = 45;

// Calculate the gross pay
let regularPay = 0;
let overtimePay = 0;
if (hoursWorked > 40) {
  regularPay = 40 * payRate;
  overtimePay = (hoursWorked - 40) * (payRate * 1.5);
} else {
  regularPay = hoursWorked * payRate;
}
let grossPay = regularPay + overtimePay;

// Print the gross pay
console.log(`The gross pay is $${grossPay.toFixed(2)}`); 
