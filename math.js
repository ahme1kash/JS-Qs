let x = Math.PI
console.log(x)
Math.PI = 9
console.log(Math.PI)
z = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(z)