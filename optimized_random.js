let arr = [];
function check(val) {
  if (!arr.includes(val)) {
    return true;
  }
}
function schuffle() {
  let val;
  for (let i = 0; i < 10; i++) {
    do {
      val = Math.floor(Math.random() * 10);
    } while (!check(val));
    arr.push(val);
  }

  return arr;
}
console.log(schuffle());
