

Promise.resolve()
    .then(function b() {
        while (Promise.resolve()) {
            continue
        }
    });

for (let idx = 0; idx < 4; idx++) {
    console.log(idx)
}
for (let idx = 0; idx <= 5; idx++) {
    setTimeout(() => {
        console.log(idx, " will appear after every 1s")
    }, 1000)

}
Promise.reject()
    .catch(function c() { console.log("C") });
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
    }).catch((err) => { console.log(err) });
