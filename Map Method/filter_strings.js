// Excluding Certain Elements: Given an array of strings, use filter to remove all strings that contain numbers.
const filtered_string = (string_arr) => {
    const filtered = string_arr.filter((elem) => {
        let regex = /^\D*$/
        // if (regex.test(elem)) {
        //     return elem
        // }
        if (elem.search(regex) != -1) {
            return elem
        }
    })
    return filtered
}
console.log(filtered_string(["John2", "Rock", "Za2", "MikeNix"]))