function third_max(nums_arr) {
    let first_max = Number.MIN_VALUE
    let second_max = Number.MIN_VALUE
    let third_max = Number.MIN_VALUE
    // [55,44,33,45,66,87,32]
    for (let num of nums_arr) {
        if (num > first_max) {
            third_max = second_max
            second_max = first_max
            first_max = num

        }
        else if (num > second_max) {
            third_max = second_max
            second_max = num
        }
        else if (num > third_max) {
            third_max = num
        }

    }
    return [first_max, second_max, third_max]
}
console.log(third_max([55, 4, 32, 12, 8]))