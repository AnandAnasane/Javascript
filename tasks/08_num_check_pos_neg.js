// WAP to check the number is positive or Negative

// With using the Math.sign() Method

const a = 0;
const result = Math.sign(a);
console.log(result);

//Output 1 = Positive
//Output 2 = Negative
//Output 0 = Zero



// second withouth using Math.sign() method
const num1 = 'anand';
if(num1 > 0) console.log(`${num1} is a positive number`);
else if(num1 < 0) console.log(`${num1} is a Negative number`);
else if( num1 == 0) console.log(`${num1} is a Zero`);
else console.log(`${num1} is not a number`);


