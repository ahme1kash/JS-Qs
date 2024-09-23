function sortNum(nums) {
    sorted = nums.sort((a, b) => a - b)
    return sorted
    // return nums.sort((a, b) => b-a)  descinding
}
console.log(sortNum([8, 3, 2, 7, 12, 1, 16]))