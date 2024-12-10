// this refers to the context in which a function is called.
// In the global context, this refers to the global object (window in browsers).
// In a method, it refers to the object that owns the method.
//In events , this refers to the object that receives the events

//1. Global Context
// In the global scope, this refers to the global object:
// In browsers, it's the window object.
// In Node.js, it's the global object.
console.log(this); // In a browser, logs the global `window` object

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Inside an Object Method
// When used inside an object method, this refers to the object that owns the method.
//this.name refers to the name property of the person object.

const person = {

    name: 'anand',
    lastName: 'Anasane',
    fullName(){
        console.log(`My Full Name is ${this.name} ${this.lastName}`)
    }
}
person.fullName();

//////////////////////////////////////////////////////

// 3. With Arrow Functions
// Arrow functions do not have their own this. They inherit this from the surrounding lexical context.

const person1 = {
    name: "Alice",
    greet: function () {
        const arrowFunction = () => console.log(this.name);
        arrowFunction(); // Inherits `this` from `greet`
    }
};

person1.greet(); // Alice
