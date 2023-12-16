function alpha(str){
    z = str.split(' ').sort().map((word)=>{
        return word.split('').sort().join('')
    })
    console.log(z.join(' '))
}
alpha("apple")