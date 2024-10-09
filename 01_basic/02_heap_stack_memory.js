// Stack memory - it get the copy of that variable
// All the premitive data types goes to the stack memory

let my_name = "Anand";
let nick_name = my_name;

nick_name = "annie";
console.log(my_name);
console.log(nick_name);



// This is the example of Heap memory.. in heap memory we get the reference of that varible 
// All the non-premitive data types goes to the Heap memory
let userone = {

    gmail: "anand@gmail.com",
    city: "Pune",
}
 

userone.city = "Nagpur";

console.log(userone);

