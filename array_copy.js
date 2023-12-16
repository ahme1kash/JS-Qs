let arr1 = ["item1","item2"]
let arr2 = [...arr1]
let arr3 = arr1.slice(0)
let arr4 = [].concat(arr1)

console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)

arr1.push('item3')
console.log(arr1)


console.log('hello'.concat("world"))
console.log([2,3].concat([1,2]))
