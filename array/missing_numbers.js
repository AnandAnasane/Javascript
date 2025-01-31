let arr = [1,2,3,4];
let n= 10;
let output = [];

for(let i=1; i<=n; i++){
    !arr.includes(i) ? output.push(i) : "" ; 
}

console.log(output);