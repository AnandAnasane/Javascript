function fibseries(n){
    let a = 0;
    let b = 1;
    for(let i=1; i<n; i++){
        console.log(a);
        let temp = a+b;
        a = b;
        b = temp;
    }
}
fibseries(10);

// output : 0 1 1 2 3 5 8 13 21