function findSecondLargest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let numbers = [10, 5, 8, 20, 15];
console.log(findSecondLargest(numbers));
