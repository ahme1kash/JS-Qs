// Converting an array of arrays where each array holds two values.
// Iteresting thing is that all the first element of array i.e. keys should be unique
const workers = new Map([
    ["name","Arbaz"],
    ["age",27],
    ["address","New delhi"],
    ["Profession","Molecular Biologist"]
])
console.log(workers)
const worker_obj = Object.fromEntries(workers)
console.log(worker_obj)



// const map = new Map([
//     ["foo", "bar"],
//     ["baz", 42],
//   ]);
//   const obj = Object.fromEntries(map);
//   console.log(obj); // { foo: "bar", baz: 42 }
  