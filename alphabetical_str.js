function alpha(str) {
    // console.log(str.split("").sort())
    z = str.split(' ').sort().map((word) => {
        console.log(word)
        return word.split('').sort().join('')
    })
    // console.log(z)
    console.log(z.join(' '))
}
alpha("John is")