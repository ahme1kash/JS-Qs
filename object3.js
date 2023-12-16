let employee = {
    '1name':"John",
    $company:"Microsoft",
    '&designation':"SDE2",
}
console.log(employee['1name']) // Accessing via Bracket-- Always Works
console.log(employee.$company) // Accessing via . notation 
// console.log(employee.'&designation') //  Compilation Error
/*
* Accessing a key with squarebracket notation will never give error
* provided the object is valid,therefore we can safely access keys via squarebrackets
*/ 
