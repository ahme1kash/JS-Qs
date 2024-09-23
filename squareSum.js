const sumFunc = (nums) => {
    const square_sum = nums.reduce((acc, cur) => {
        acc += cur * cur
        return acc
    }, 0)

    return square_sum
}
console.log(sumFunc([2, 4]))