const products = [
    {
        name: "Laptop",
        price: 1200,
        discount: 10 // 10% discount
    },
    {
        name: "Smartphone",
        price: 800,
        discount: 15 // 15% discount
    },
    {
        name: "Headphones",
        price: 150,
        discount: 20 // 20% discount
    },
    {
        name: "Smartwatch",
        price: 200,
        discount: 5 // 5% discount
    },
    {
        name: "Tablet",
        price: 400,
        discount: 25 // 25% discount
    }
];
// Calculating Discounts: Given an array of product objects with price and discount properties, use map to calculate the final price for each product after applying the discount.

function price_after_disc(products) {
    const final_price = products.map((item) => {
        return ({ ...item, discounted_price: item.price - (0.01 * item.discount * item.price) })

    })
    return final_price
}
const modified_prod = price_after_disc(products)
console.log(modified_prod)