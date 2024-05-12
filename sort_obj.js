const items = [
  {
    name: "Iron",
    id: 21,
    price: 1200,
  },
  {
    name: "Mixer",
    id: 23,
    price: 1800,
  },

  {
    name: "Toaster",
    id: 5,
    price: 767,
  },
];
const sorted = items.slice(0).sort((a, b) => {
  return a.price - b.price;
});
console.log(sorted);
