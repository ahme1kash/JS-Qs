/*
 * Write your code below to implement the challenges.
 * Make sure to export your functions when you're done.
 */
const capitalize = function (str_array){
    let capitalized = str_array.map((elems)=>{
    //   console.log(elems)
    //   return (elems.charAt(0).toUpperCase() + elems.slice(1).toLowerCase());
    return (elems.toUpperCase());
      // return capital
    }
    )
    return capitalized
  
  }
const filterLength = function (str_array,num){
    let filter_arr = str_array.filter((elems)=>{
      return elems.length>=num?elems:null
    })
   return filter_arr
}

const sumOfSquares = function (num_array){
    let sum_arr = num_array.reduce((cur,acc)=>{
         
         return  cur +acc*acc
    },0)
    return sum_arr
 }

 console.log((sumOfSquares([3,9,8,12])))
 console.log(filterLength(["hello","john","Harry","Sam"],5))
 console.log(capitalize(["hello","john","Harry","Sam"],5))