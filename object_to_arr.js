let obj = {
    name:"John",
    company:"Microsoft",
    designation:"SDE2"
}
console.log(Array.isArray(obj))
// z = Object.entries(obj)
// console.log(z)
let intro = Object.keys(obj).map(key=>`${key}:${obj[key]}`)
console.log(intro)   // [ 'name:John', 'company:Microsoft', 'designation:SDE2' ]
console.log(typeof intro)  // object
console.log(Array.isArray(intro)) //true
for (let i of intro){
    console.log(i)    // name:John company:Microsoft designation:SDE2
}

// console.log(intro[0].split(':')[0])