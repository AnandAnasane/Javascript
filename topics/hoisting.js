//Hoisting
//Hoisting is JavaScript's default behavior of moving variable and function declarations 
// to the top of their scope before code execution.

console.log(x); // undefined (hoisted, but not initialized)
var x = 5;

console.log(y); // ReferenceError (let is not hoisted)
let y = 10;
