// const arr = [1,1,2,2,4];
// let count = 0;

// function countOccurance(arr){
    

//     for(let i=0; i<=arr.length; i++){
//         for(let j=arr.length; j>=0; j--){
//             if(arr[i]===arr[j]){
//                 count++;
//             }
//         }
        
//     }
//     return count;
   
// }
// console.log(count);



function countUniqueRepeatedElements(arr) {
    let seen = {}; 
    let repeatedCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            if (seen[arr[i]] === 1) { 
                
                repeatedCount++;
            }
            seen[arr[i]]++;
        } else {
            seen[arr[i]] = 1;
        }
    }
    return repeatedCount;
}

const arr = [1, 1, 2, 2, 4];
console.log(countUniqueRepeatedElements(arr));
