// Removing Duplicates: Given an array of numbers, use filter in combination with indexOf to remove duplicate numbers.

// Very Smart way.

//? Logic is
//* for the element which gets repeated the arr.indexOf(nums) will return its first occurence and its repeated occurence will have different value of idx so the retun condition fails and the number gets filtered out of the array.
function removeDuplicates(arr) {
    const unique_arr = arr.filter((nums, idx) => {
        return (arr.indexOf(nums) === idx)
    })
    return unique_arr
}
console.log(removeDuplicates([21, 34, 44, 65, 26, 90, 32, 21, 56, 76, 65, 30, 50, 26]))