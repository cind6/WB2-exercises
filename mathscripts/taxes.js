"use strict";

//get all know values

var salary = 3800;

var federalTaxRate = 0.23;

var taxWithholding = (federalTaxRate * salary)
var amountOfCheck = salary - federalTaxRate;

console.log("you made $" + salary);
console.log("Federal Tax with holding is $" + taxWithholding );
console.log("so heres your check for $ " + amountOfCheck);