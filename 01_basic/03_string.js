const name = "Anand";
const cityCode = 440043;

console.log(`My name is ${name} and my city code is ${cityCode}`);


// This is the new type to assigining the string
const newName = new  String ('  Vishvakarma  ');
console.log(newName.__proto__);
console.log(newName);

// Trim Method
const newName1 = '     Nagpur    ';
console.log(newName1);
console.log(newName1.trim());

// Length Method
const newName2 = "Anand-Pune-Nagpur";
console.log(newName2.length);

// Slice Method -4 is not included in the slice  method
const newName3 = "Anand-Pune-Nagpur";
console.log(newName3.slice(0, 4));

// Indexof Method 
const newName4 = "Angular";
console.log(newName4.indexOf('g'));

// LastIndexOf Method -
const one5 = 'Angular';
console.log(one5.lastIndexOf('u'));


// TO upperCase and to Lowercase Method
const NewName5 = "AngularandReact";
console.log(NewName5.toUpperCase());
console.log(NewName5.toLowerCase());

// Bold Method
const one = "Angular";
console.log(one.bold());

// charAt method- print the value of that index number which we put at charAT
const one1 = "Angular"
console.log(one1.charAt(3));

//concat method -to join the two string 
const one2 = "Angular";
console.log(one2.concat("React"));

// EndsWith Method- Returns boolean value. if it ends with 'r' it returns TRUE
const one3 = "Angular";
console.log(one3.endsWith('r')); //TRUE
console.log(one3.endsWith('R')); //FALSE
console.log(one3.endsWith('R'.toLowerCase()));  //TRUE

// italics Method
const one4 = "Angular";
console.log(one4.italics()); // <i>Angular </i>

//Replace Method
// replace(searchvalue, newValue)
const one6 = 'Angular and React, React enemy of ANgular';
console.log(one6.replace('React', 'Javascript'));

//ReplaceAll method - Replace the all words of search value
//replaceAll(searchvalue, newValue)
const one7 = 'hello world, Angular is library of a world';
console.log(one7.replaceAll('world', 'Javascript'));

// Split Method
const two = 'Angular-React-Vue-Javascript';
console.log(two.split('-')); // [ 'Angular', 'React', 'Vue', 'Javascript' ]

//Substring Method- Substring starts from thew index no of 3(we put 3 here) 
const two1 = 'Angular';
console.log(two1.substring(3)); //ular


// Search Method - it returns the index number of the value which we have put on
const two2 = 'Angular';
console.log(two2.search('a'));










