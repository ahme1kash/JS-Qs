const arr = [
  { id: 1, Name: "Ramesh" },
  { id: 10, Name: "Adil" },
  { id: 6, Name: "Parvez" },
  { id: 4, Name: "Uday" },
  { id: 2, Name: "Manish" },
  { id: 7, Name: "Manisha" },
  { id: 5, Name: "Pope" },
  { id: 8, Name: "Kashif" },
  { id: 9, Name: "Zainab" },
  { id: 3, Name: "Ruby" },
];

// console.log(arr, typeof arr);

arr.sort((obj1, obj2) => {
  return obj1.id - obj2.id;
});
console.log(arr);
