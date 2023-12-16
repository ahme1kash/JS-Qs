let returnN = function (arr,n=1){
    if(n<= arr.length){
    console.log(arr.slice(0,n))
    }
    else{
        console.error("Index out of Range")
    }
}
const arr = ["Travis","Marnus","Hardik","Shami"]
returnN(arr)