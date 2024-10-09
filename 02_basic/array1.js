const myarr = [22,3,5,6,78];
console.log(myarr);

//Push Method
// It will add the element from the back
myarr.push(999);
console.log(myarr);

//pop method
// It will delete the last element from the array
myarr.pop();
console.log(myarr);

//unshift method- IT will add the element at the start of the array
myarr.unshift(1000);
console.log(myarr);

//shift Method 
// IT will remove the element of the array from the start
myarr.shift();
console.log(myarr);

console.log('------------------------------');

// Slice Method
// IT will start from the first argument(1) and end before the last argument(4). 
// i.e Last argument not included.

const arr = [2,6,3,8,5,9]
const a = arr.slice(1, 4);  //[ 6, 3, 8 ]
console.log(a);

console.log('------------------------------');

// Splice Method
// IT will start from the first argument(1) and end with the last argument(4). 
// i.e Last argument included included.
const arr1 = [2,6,3,8,5,9]
const b = arr.splice(1, 4); //[ 6, 3, 8, 5 ]
console.log(b);




