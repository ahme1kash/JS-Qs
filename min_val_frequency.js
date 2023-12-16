const arr = [3,7,1,-7,-8,-8,-7,-8]
const min_val = Math.min(...arr)
// console.log(min_val)
const freq_arr = arr.filter((value)=>
{
    let freq = 0
    if(value==min_val){
        return value
       
}
    
})
console.log(freq_arr.length)


