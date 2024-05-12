// Select Random number from an Array
let new_arr = [];
count = 1;
function check(val) {
  if (!new_arr.includes(val)) {
    return true;
  }
}
function schuffle() {
  while (true) {
    val = parseInt(Math.random() * 10);
    if (check(val)) {
      new_arr.push(val);
      if (new_arr.length == 10) {
        console.log("10");
        return;
      }
    } else {
      val += count;
      check(val + count);
    }
  }
}
schuffle();
console.log(new_arr);
