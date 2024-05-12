const obj = {
  key1: "val1",
  key2: "val2",
};

const obj2 = Object.assign({}, obj);
obj2["key3"] = "val3";
console.log(obj2);

for (let elem in obj2) {
  console.log(elem, obj[elem]);
}
