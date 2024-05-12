let appliances = {
  name: "Iron",
  id: 21,
  price: 1200,
};
let all_appliance = Object.assign({}, appliances);
appliances["barCode"] = "IHBH78_90";
console.log(appliances);
console.log(all_appliance);

// Second Method
let new_appliance = { ...all_appliance };
appliances["barCode"] = "IHBH78_90";
console.log(new_appliance);
