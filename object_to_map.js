let product = {
    weight: 10.25,
    price: 10000,
    manufacturedBy:"HAL",
    '5s':true

}
console.log(product,typeof product,Object.entries(product).length)
let map_obj = new Map(Object.entries(product))
map_obj.set("ISI","yes")
console.log(map_obj,typeof map_obj,map_obj.size)