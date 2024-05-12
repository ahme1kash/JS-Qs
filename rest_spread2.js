function takeNum(...nums){
    let total = 0
  for(let num of nums){
    total+=num
  }
  return total
}
let arr = [3,5,6,7,11,14]
console.log(takeNum(...arr))