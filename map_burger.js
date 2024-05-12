const burgers = [
  {
    id: 1,
    name: "Maharaja Burger",
    price: 100,
  },
  {
    id: 2,
    name: "Maharaja  Epic Cheese Burger",
    price: 130,
  },
  {
    id: 7,
    name: "Aloo Tikki Burger",
    price: 60,
  },
  {
    id: 3,
    name: "Regular fun Burger",
    price: 42,
  },
];
const discount_percent = 30;
const updated_burger_obj = burgers.map((burger) => {
  return {
    ...burger,
    discount_percent,
    offer_price: burger.price - 0.3 * burger.price,
  };
});
console.log(updated_burger_obj);
