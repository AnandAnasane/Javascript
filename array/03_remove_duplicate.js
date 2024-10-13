const arr = [2,2,3,5,3,4,6,3,4];
const duplicate = [];

for(let i=1; i< arr.length; i++){
    for(let j=i+1; j< arr.length; j++){

        if(arr[i] === arr[j] && !duplicate.includes(arr[i])){
            duplicate.push(arr[i]);
        }
    }
}
console.log(`duplicate array are [${duplicate}]`);