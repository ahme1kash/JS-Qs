let arr = [{
    gender:"male",
    name:"Dsouza"
},
{
    gender:"female",
    name:"Jenny"
},
{
},
{
    gender:"female",
    name:"Henny"
},
{
    gender:"LGTV",
    name:"Ellie"
},
{
    gender:"male",
    name:"Dara"
}


]
// let count =1
let only_male = arr.filter((obj )=>{
      if(obj.gender == 'male'){
        return obj
      }
})
console.log(only_male)