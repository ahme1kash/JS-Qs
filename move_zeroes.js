function moveZeroes(nums) {
    let left = 0 ;
    for(let idx = 0; idx<nums.length; idx++){
        if(nums[idx] !== 0){
            [nums[left], nums[idx]] = [nums[idx], nums[left]];
            left++;
        } 
    }
    // console.log(nums)
    return nums;
}
console.log(moveZeroes([0,2,3,1,0,9,2]))