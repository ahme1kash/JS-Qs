const sum = (...arr)=>{
    console.log(arr)
    let total=0
    for(let i of arr){
        // console.log(i)
        total +=i
    }
    return total;
}
let arr =[4,5,6,9]
// let res = sum.apply(null,arr)
// console.log(res)
let res = sum.call(null,...arr)
console.log(res)