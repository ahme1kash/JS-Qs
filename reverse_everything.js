function rev_str(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    console.log(reverse)
}
let given_str = "My name is John"
rev_str(given_str)


function rev_num(num) {
    let rev_num = ""
    let str_num = String(num)
    console.log(str_num)
    for (let i = str_num.length - 1; i >= 0; i--) {
        rev_num += str_num[i]
    }
    console.log(Number(rev_num))
}
rev_num(123.75)
