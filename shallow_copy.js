const shallow_compare = (source,target)=>{
    if(typeof source!= typeof target){
        return false
    }
    else{

        if (typeof source == "array"){
            if(source.length != target.length){
                return false
            }
        }
        else{
           equal =  source.every((val,idx)=>val===target[idx])
        }

        return equal
    }
}
console.log(shallow_compare([1,2,3],[1,2,3]))