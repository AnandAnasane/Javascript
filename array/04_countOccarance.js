function countOccurance(arr , num){
    let count = 0 ;
    for(let i =1 ; i <arr.length; i++){

        if(arr[i] === num){
            count++;
        }
    }
    return count;
}

console.log(countOccurance([1,4,2,3,4,2,3,1,4,2,2,2], 4)); //output 5