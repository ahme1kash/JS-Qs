function secondMax(arr) {

    let first_max = Number.NEGATIVE_INFINITY
    let second_max = Number.NEGATIVE_INFINITY
    for (let num of arr) {
        if (num > first_max) {
            second_max = first_max
            first_max = num
        }
        else if (num > second_max) {
            second_max = num
        }
    }

    return [first_max, second_max]
}

let arr = [12, 7, 32, 94, 66, 190, 76, 89, 80, 53]
console.log(secondMax(arr))