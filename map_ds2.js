const intro = new Map()
intro.set('firstName','Kashif')
intro.set(12,'77%')
// console.log(intro)
// console.log(intro.get(12))
// for (let key of intro.keys()){
//     console.log(key)
// }
// for (let value of intro.values()){
//     console.log(value)
// }
console.log(intro)
for (let elem of intro.entries()){
    console.log(elem)
}
for (let [key,val] of intro){
    console.log([key,val])
}