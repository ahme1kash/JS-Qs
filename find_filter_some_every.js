const nums_1 = [3, 5, 7, 2, 4, 6, 8];
const even_1 = nums_1.find((num) => num % 2 == 0);
console.log("Find Method", even_1);

const nums_2 = [3, 5, 7, 2, 4, 6, 8];
const even_2 = nums_2.filter((num) => num % 2 == 0);
console.log("Filter Method", even_2);

const nums_3 = [3, 5, 7, 2, 4, 6, 8];
const even_present_3 = nums_3.some((num) => num % 2 == 0);
console.log("Some Method", even_present_3);

const nums_4 = [3, 5, 7, 2, 4, 6, 8];
const even_present_4 = nums_4.every((num) => num % 2 == 0);
console.log("Every Method", even_present_4);

// find and filter return array
// If not found find returns undefined but filter returns empty array[]
// some and every return boolean
