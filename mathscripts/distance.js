//find distance between 2 points

var x1 = 1;
var y1 = 2;
var x2 = 3;
var y2 = 4;

// function
var distanceBetweenPoints = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow (y2-y1, 2));



// Output result
console.log("Distance between (" + x1 + ", " + y1 + ") and (" + x2 + ", " + y2 + "): " + distanceBetweenPoints.toFixed(2));

