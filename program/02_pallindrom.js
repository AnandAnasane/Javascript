// To check the string is pallindrom or not?


function isPallindrom(str){
    let len = str.length;

    for(let i=0; i < len/2; i++ ){

        if(str[i] !== str[len-1-i])
            {
            return 'Is not pallindrom'
            } 
    }
    return 'Is pallindrom';
   
}
console.log(isPallindrom('madam')); // Is pallindrom
console.log(isPallindrom('hello')); //Is not pallindrom


