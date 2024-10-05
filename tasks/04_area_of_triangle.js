// right angle triangle  = base * height * 1/2

const base = 10;
const height = 20;
const areaOftriangle = base*height*1/2;

console.log(`Base is ${base}`); //Base is 10
console.log(`Base is ${height}`); //Base is 20
console.log(`The area of right angled triangle is ${areaOftriangle}`); //The area of right angled triangle is 100

// Regular Triangle (Heron's formula)
// s = (a+b+c)/2  sqOf(s*(s-a)*(s-b)*(s-c))

const side1 = 10;
const side2 = 10;
const side3 = 10;
const s = (side1+ side2+ side3)/2;
console.log(`the value of s is ${s}`);  // the value of s is 15

const area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
console.log(`The area of regular triangle is ${area}`);  //output- The area of regular triangle is 43.30127018922193

