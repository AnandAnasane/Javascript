// Find Second Largest Numbers

const arr = [1,2,3,4,5,6]
function Secondlargest(arr){

    let laregst = - Infinity;
    let Secondlargest = -Infinity;

    for(let i = 1; i<= arr.length; i++){

        if(arr[i] > laregst){
            Secondlargest = laregst;
            laregst = arr[i];
        }else if(arr[i] > Secondlargest && arr[i] !== laregst){
            Secondlargest = arr[i];
        }
    }
    return Secondlargest;

} 
console.log(Secondlargest(arr))















// Fibnoacci Series
//  fibnoacci =  (n) => {
//     let a = 0;
//     let b = 1;

//     for (let i = 0; i<= n ; i++){
//         console.log(a);
//         let next = a + b; 
//         a = b; 
//         b = next;
//     }
// }
// fibnoacci(10)



// reverse an array

// const arr = [ 1,2,3,4,5]
// const reversedArray = [ ];
// for(let i = arr.length-1; i>= 0; i--){
//     reversedArray.push(arr[i])
// }
// console.log(reversedArray)

// print duplicate array elements
// const arr = [ 1,1,2,2,3,3,4,4,5,5,6,7,8,9,0]
// const duplicate = [ ];

// for(let i = 0; i<arr.length; i++){
//     for(let j = i + 1; j<arr.length; j++){

//         if(arr[i] === arr[j] && !duplicate.includes(arr[i])){
//             duplicate.push(arr[i])
//         }
//     }
// }
// console.log(duplicate)
// console.log(arr)


// remove duplicate array elements print remaining

// const arr = [ 1,1,2,2,3,3,4,4,5,5,6,6,7,8,9,0]
// const remainingArray = []
// for(let i = 0; i<= arr.length-1; i++){
//     if(!remainingArray.includes(arr[i])){
//         remainingArray.push(arr[i]);
//     }
// }
// console.log(remainingArray)