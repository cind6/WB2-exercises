"use strict";



// Define the pay rate and hours worked
let payRate = 30;
let hoursWorked = 50;

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

let annualGrossPay = grossPay * 52;


// Calculate the tax withholding based on the filing status
let taxRate = 0;
let filingStatus = "single";
 
  if (annualGrossPay < 12000 === "single") {
    taxRate = 0.05;
  } else if (annualGrossPay >= 12000 && annualGrossPay <= 24000) {
    taxRate = 0.1;
  }
 else if (annualGrossPay >= 25000 && annualGrossPay <= 75000) {
    taxRate = 0.15;
} else if (annualGrossPay > 75000) {
    taxRate = 0.20;
  }


 else if (filingStatus === "joint") {
  if (annualGrossPay < 12000) {
    taxRate = 0.0;
} else if (annualGrossPay >= 12000 && annualGrossPay <= 24000) {
    taxRate = 0.6;
  }
} else if (annualGrossPay >= 25000 && annualGrossPay <= 75000) {
    taxRate = 0.11;
} else if (annualGrossPay > 75000) {
    taxRate = 0.20;
  }



let taxWithholding = grossPay * taxRate;

// Calculate the net pay
let netPay = grossPay - taxWithholding;



  
    
  
  

// Print the gross pay
console.log("you worked " + hoursWorked + " hours this week " + "your gross pay is $"+ grossPay);
console.log("This is your annual pay $" + annualGrossPay);
console.log("your filing status is " + filingStatus)
console.log("Your tax with hold this period is: $" + taxWithholding.toFixed(2));
console.log("your net pay $" + netPay)
