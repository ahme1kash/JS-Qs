const product_map = new Map();
product_map.set("Name","Dettol")
product_map.set("Price","100")
product_map.set("Expiry","Feb")
console.log(product_map,product_map.size)

let product_obj = Object.fromEntries(product_map)
console.log(product_obj,Object.keys(product_obj).length)