const product = [
    {
        productId:1,
        productName:"mobile",
        price:12000
    }, {
        productId:2,
        productName:"laptop",
        price:50000
    }, {
        productId:1,
        productName:"tablet",
        price:30000
    }, {
        productId:1,
        productName:"speaker",
        price:3500
    },
    
]
gst = 4500
const total_price = product.reduce((acc,curr)=>{
    acc = acc + curr.price
    return acc
},gst)
console.log(total_price)