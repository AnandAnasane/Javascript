function findSecondLargest(arr)
{
    let largest = -Infinity, secondLargest = -Infinity;

    for(let i = 0; i < arr.length; i++){

        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i]
        }
        else if(arr[i] > secondLargest && arr[i] !== largest)
            {
                secondLargest = arr[i];
        }

    }
    return secondLargest;

}
let num = [11,22,33,44,55,66];
console.log(findSecondLargest(num));