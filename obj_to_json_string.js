let test_obj = {
  name: 'John',
  age: 30,
  isStudent: false,
  languages: ["JavaScript", "Python", "Java"]
}


let test_obj_string = '{';
for (key in test_obj) {
  if (typeof test_obj[key] == "string") {
    test_obj[key] = `"${test_obj[key]}"`
  }
  if (Array.isArray(test_obj[key])) {
    test_obj[key] = `[${test_obj[key]}]`
  }
  test_obj_string += `"${key}":${test_obj[key]},`;
}
console.log(test_obj_string.slice(0, -1), "}");
console.log(typeof test_obj_string);
