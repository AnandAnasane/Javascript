// var: Function-scoped, can be redeclared and updated.
// let: Block-scoped, can be updated but not redeclared.
// const: Block-scoped, cannot be updated or redeclared. Used for constants.

var x = 10;
if (true) {
    var x = 20; // Allowed
    console.log(`value of var is inside the function is ${x}`); // 20
}
console.log(`value of var is ${x}`); // 20

let y = 10;
if (true) {
    let y = 20; // New block-scoped variable
    console.log(`value of let is inside the function(blocked) is ${y}`); // 20
}
console.log(`value of let is ${y}`); // 10

const z = 10;
// z = 20; // Error: Assignment to constant variable
console.log(z); // 10
