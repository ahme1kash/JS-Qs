function titleCase(mystr){
    arr = mystr.split(' ')
    words = arr.map((word)=>{
        // final = word[0].toUpperCase()+word.slice(1).toLowerCase();
        final = word[0].toUpperCase()+word.substring(1).toLowerCase();
        return final
        
    })
    console.log(words.join(' '))

}
titleCase("hello how aRe yoU")