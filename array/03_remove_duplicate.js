const arr = [2,2,3,5,3,4,6,3,4,1];
const duplicate = [];

for(let i=0; i< arr.length; i++){
    for(let j=i+1; j< arr.length; j++){

        if(arr[i] === arr[j] && !duplicate.includes(arr[i])){
            duplicate.push(arr[i]);
        }

    }
}
// console.log(`duplicate array are [${duplicate}]`);
console.log(duplicate);

//with the help of spread operator
// const brr1 = [1,1,2,3,4,5,2,3,6,3,4,5,6,7,9,];
// const uniquebrr1 = [... new Set(brr1)];
// console.log(uniquebrr1);

// const names = ['india', 'china', 'UAE', 'india', 'USA', 'UAE', 'Russia'];
// const uniqueNames = [... new Set(names)];
// console.log(uniqueNames);



