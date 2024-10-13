const arr1 = [1,2,3,4,5,6];

function revresearray(){
    const arr2 = [];

    for(let i = arr1.length-1; i>=0; i--){
        arr2.push(arr1[i]);
    }
    return arr2;
}
console.log(revresearray());  //output [ 6, 5, 4, 3, 2, 1 ]
