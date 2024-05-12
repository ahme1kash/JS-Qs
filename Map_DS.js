const map = new Map();
map.set("x", 1);
map.set("y", 2);
// console.log([...map])
console.log(map);
for (let m of map) {
  console.log(m);
}
for (let key of map.keys()) {
  console.log(key);
}
for (let val of map.values()) {
  console.log(val);
}
for (let data of map.entries()) {
  console.log(data);
}
