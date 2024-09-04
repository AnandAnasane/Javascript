let userName = "Anand";
let userId = 101;
let userCity = "Pune";
let isMale = true;
let position = "MEAN developer";


console.table([userName, userId, userCity, isMale, position]);


// OUTPUT
// ┌─────────┬──────────────────┐
// │ (index) │ Values           │
// ├─────────┼──────────────────┤
// │ 0       │ 'Anand'          │
// │ 1       │ 101              │
// │ 2       │ 'Pune'           │
// │ 3       │ true             │
// │ 4       │ 'MEAN developer' │
// └─────────┴──────────────────┘