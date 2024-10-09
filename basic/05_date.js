const myDate  = new Date();

console.log(typeof myDate);
// The type of Date is Object

console.log(myDate); // 2024-10-09T08:26:01.877Z

console.log(myDate.toDateString()); //Wed Oct 09 2024

console.log(myDate.toJSON()); // 2024-10-09T08:26:01.877Z

console.log(myDate.toLocaleString()); //10/9/2024, 8:28:25 AM

console.log(myDate.toString()); //Wed Oct 09 2024 08:30:27 GMT+0000 (Coordinated Universal Time)

//We can create our custom dates bu puting the date you wanted to in the Date ();
// Month of Date  is start from the 0 (index) just like an array
const myCreatedDate = new Date(2024, 0, 24);
console.log(myCreatedDate.toDateString()); //Wed Jan 24 2024

console.log(myCreatedDate.getTime()); //1706054400000 -- This value is in the form of miliseconds


const myTime = Date.now();
console.log(myTime); //1728462577817






