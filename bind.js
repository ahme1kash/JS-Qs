// bind() = Borrows a function, & creates a copy.
//
//
// "this" keyword replaced with the object
// passed in as an argument
speak = function (sound) {
console. log(`${this.name}, is, ${sound}`);
}
let dog = {
name: "dog"
}
let parrot = {
name: "parrot"
}
speak.bind(dog, "barking")()
// or
bark = speak.bind(dog, "barking");
bark() ;

speak.bind (parrot, "chirping")()
chirp = speak.bind (parrot, "chirping");
chirp()