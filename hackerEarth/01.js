
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
