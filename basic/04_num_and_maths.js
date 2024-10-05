// ++++++++++++++  NUMBERS +++++++++++++++++

const value = 200;
console.log(value); //200

const num1 = new Number(200);
console.log(num1); //output [Number: 200]

// Methods that use with numbers only

//tostring() -- this method can convert number into string
console.log(num1.toString());
//now with this tostring method we can use any methods relaed to string. for ex length
console.log(num1.toString().length); //output 3 

//tofixed() - This method can add numbers after decimal point upto the number 
// which we put in the tofixed() method. 
console.log(num1.toFixed(3)); // output 200.000

//toPrecision() method
//Number of significant digits. Must be in the range 1 - 21, inclusive.
// Returns a string containing a number represented either in exponential or 
// fixed-point notation with a specified number of digits.
//it returns the precision value i.e here we want number in 2 digit only ##toPrecision(2)
const newValue = 23.875
console.log(newValue.toPrecision(2)); //output 24
console.log(newValue.toPrecision(3)); //output 23.9
console.log(newValue.toPrecision(4)); //output 23.88


//toLocaleString() method
const hundered = 1000000;
console.log(hundered.toLocaleString()); //output  1,000,000
//this can give us a output in the form of numbers which can be easily countable . 
//but this is in the US value format 
//to use this in the india format use (en-IN) inside the toLocaleString()
//it can add commas in the form of indian standards.

console.log(hundered.toLocaleString('en-IN')); //output 10,00,000

// ++++++++++++++  MATHS +++++++++++++++++




