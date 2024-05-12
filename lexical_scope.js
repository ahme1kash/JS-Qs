let val = "sun";
console.log("I am the outermost", val);
function outer() {
  let val = "moon";
  console.log("Hello I am from Outer function", val);
  function inner() {
    let val = "stars";
    console.log("I am from inner", `The ${val} rises in the east`);
    console.log();
  }

  inner();
}
outer();
