function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArr[uniqueArr.length] = arr[i];
        }
    }
    return uniqueArr;
}

let arr = [1, 2, 3, 2, 4, 5, 1, 6, 3];
let result = removeDuplicates(arr);
console.log(result);