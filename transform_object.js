const object1 = { a: 1, b: 2, c: 3 }
const new_obj={}
for (key in object1){
    new_obj[key] = object1[key]*2
}
console.log(new_obj)


// const object1 = { a: 1, b: 2, c: 3 };

// const object2 = Object.fromEntries(
//   Object.entries(object1).map(([key, val]) => [key, val * 2]),
// );

// console.log(object2);
// { a: 2, b: 4, c: 6 }

