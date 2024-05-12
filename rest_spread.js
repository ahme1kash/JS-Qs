function sumAll(...numbers) {
  //rest
  console.log(numbers);
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
// let arr = []
let x = [8, 9];
let y = [12, 42];
let z = [10, 20];
let $ = 4;
console.log(sumAll(...x, ...y, ...z, $)); // spread
