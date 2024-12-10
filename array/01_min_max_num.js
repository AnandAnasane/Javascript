function findmax(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findmax([1,2,3,4,5,6,7]));


function findmin(brr){
    let min = brr[0];

    for(let j=1; j< brr.length; j++)
        {
            if(brr[j]< min){
                min = brr[j];
            }
    }
    return min;
}
console.log(findmin([-6,2,3,4,5,6,7,8,9]));
