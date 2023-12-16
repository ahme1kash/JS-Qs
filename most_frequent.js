function most_frequent(arr){
    let max_count_key  =  0
    let freq_obj = {}
    let current_frequent_key = null
    for (let elem of arr){
        if (!(freq_obj.hasOwnProperty(elem))){
            freq_obj[elem] = 1
        }
        else{
            freq_obj[elem] += 1
        }
                /*  
                 & Tracking the  current frequent key
                 & If two elements have same frequency then
                 & the element which appeared most first will be selected.
                */
        if (freq_obj[elem]>max_count_key){
            max_count_key = freq_obj[elem]
            current_frequent_key =  elem
        }
    }
    console.log(current_frequent_key)
}
most_frequent([12,11,12,11])