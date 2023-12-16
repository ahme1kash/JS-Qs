function reverse(num){
    let rev = `${num}`.split('').reverse().join('')
    let rev_num = Number(rev)
    console.log(rev_num)
}
reverse(354)