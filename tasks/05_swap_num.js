// First type of swapping number using temp variable

let num1 = 1;
let num2 = 2;
console.log("Before Swapping");

console.log(num1);
console.log(num2);

let temp;
temp = num1;
num1 = num2 ;
num2 = temp;

console.log("After Swapping");
console.log(num1);
console.log(num2);

// Second type of swapping number without using temp variable

let a = 10;
let b = 20;

console.log("Before Swapping");
console.log(a);
console.log(b);

a += b ; //a--30
b = a-b ; // b--10
a = a - b; //a--20


console.log("after swapping");
console.log(a);
console.log(b);

