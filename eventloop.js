
function print() {
    console.log("John")
    console.log("John2")
    setTimeout(() => {
        console.log("I will output after 1.0 second")
    }, 1000)
    console.log("John3")
}
function output() {
    console.log("Mary")
    console.log("Mary2")
    console.log("Mary3")
}
fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
    console.log("I m from 1st")
    console.log(data, "1")
})
fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
    console.log("I m from 2nd")
    console.log(data, "2")
})
fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
    console.log("I m from 3rd")
    console.log(data, "3")
})
fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
    console.log("I m from 4th")
    console.log(data, "4")
})
fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
    console.log("I m from 5th")
    console.log(data, "5")
})
fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
    console.log("I m from 6th")
    console.log(data, "6")
})
fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
    console.log("I m from 7th")
    console.log(data, "7")
})
fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
    console.log("I m from 8th")
    console.log(data, "8")
})
fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
    console.log("I m from 9th")
    console.log(data, "9")
})
fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
    console.log("I m from 10th")
    console.log(data, "10")
})
Promise.resolve().then(() => console.log("Hello"));
Promise.resolve().then(() => console.log("Hi JavaScript"));
Promise.resolve().then(() => console.log("Hi JavaScript"));
func1 = () => {
    setTimeout(() => {
        console.log("I will run after 1.2 seconds")
    }, 1200)
}
func2 = () => {
    setTimeout(() => {
        console.log("I will run after 0.9 sssssssecond")
    }, 900)
}


function output2() {
    console.log("Man")
    console.log("Man2")
    console.log("Man3")
}

print()
output()
output2()
func1()
func2()
