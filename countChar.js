
function countChar(str, char) {
    let count = 0;
    str_mod = str.trim().replaceAll(" ", "").split('');
    str_mod.forEach((character) => {
        character === char ? count += 1 : ""
    })
    return count

}
console.log(countChar("mynameislakhan and", "w"))