let cat = Object. create({ type: 'lion' })
cat.size = 'large';
console.log(cat)
cat.type = 'tiger';
let copyCat = {...cat };
console.log(copyCat)