// A closures in JS is a function where an inner function has access to
//outer (enclosing) functions variable even after the outer function has completed 
// its execution.
//closures allows a function to remember its lexical scope.

function outerFunction (outerVariable){

    return function innerFunction(innervariable){
        console.log(`outer: ${outerVariable}, inner: ${innervariable}`);
        
    };
}

const newFun = outerFunction('outside function.........!');
newFun('inner Function...........!');
