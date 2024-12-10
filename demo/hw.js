// let text = prompt("Write your message");
// console.log(`HEllo World ${text}`);


// let name = prompt("What is your name?");
// console.log(`Hello, ${name}!`);


// let name = prompt("What is your name?");
// if (name !== null && name.trim() !== "") {
//     console.log(`Hello, ${name}!`);
// } else if (name === null) {
//     console.log("You canceled the prompt.");
// } else {
//     console.log("You entered an empty name.");
// }



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", (name) => {
    console.log(`Hello, ${name}!`);
    rl.close(); 
});
