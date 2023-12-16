function countFreq(str){
    let count_freq  = {}
    for (let char of str){
        if (!(char in count_freq)){
            count_freq[char] = 0
        }
        else{
            count_freq[char] += 1
        }
    }
    console.log(count_freq)
}
countFreq("the sun rises in the east")