var calculator = require('./Q6-calculator');
var sum = require('./operations/sum');

var mult = require('./operations/multiply');


var moment = require('moment');

 
var a=10, b=5;
 
console.log("The sum of "+a + " & " +b + " is:" +calculator.add(a,b));

console.log("The multiplication of "+a + " & " +b + " is:"+calculator.multiply(a,b));


 
console.log("Today is: " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a") ,"The sum of "+a + " & " +b + " is:" +sum.add(a,b) +", The multiplication of "+a + " & " +b + " is:"+mult.multiply(a,b));