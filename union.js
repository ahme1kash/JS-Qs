function union(arr1, arr2) {
    arr3 = [...arr1, ...arr2]
    console.log(arr3)
    let union_arr = [...new Set([...arr1, ...arr2])]
    console.log(union_arr)
}
let arr1 = [2, 3, 8, 9]
let arr2 = [3, 12, 8, 16]
union(arr1, arr2)