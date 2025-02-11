// Function to sort an array in ascending order using Bubble Sort
function bubbleSortAscending(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Function to sort an array in descending order using Bubble Sort
function bubbleSortDescending(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example array
let numbers = [5, 2, 9, 1, 5, 6];

console.log("Original Array:", numbers);
console.log("Sorted in Ascending Order:", bubbleSortAscending([...numbers]));
console.log("Sorted in Descending Order:", bubbleSortDescending([...numbers]));
