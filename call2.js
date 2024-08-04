// let name = "Raj/"
let name = 'Raj'
let obj = {
    name: "Kashif",
    salary: "13LPA",
    Profession: function (prof) {
        return `My Name is ${this.name} and I earn ${this.salary}. I am a ${prof}`
    }
}

// let aboutMe = Profession.bind(obj,"Software Engineer")
// console.log(aboutMe())
console.log(obj.Profession.call(obj, "Software Engineer"))

// output My Name is Kashif and I earn 13LPA. I am a Software Engineer

let name1;
this.name4 = "Raj"
let obj1 = {
    name3: "Kashif",
    salary: "13LPA",
    Profession: (prof) => {
        return `My Name is ${this.name4} and I earn ${this.salary}. I am a ${prof}`
        // return `My Name is ${this.name3} and I earn ${this.salary}. I am a ${prof}`

    }
}

// let aboutMe = Profession.bind(obj,"Software Engineer")
// console.log(aboutMe())
console.log(obj1.Profession.call(obj1, "Software Engineer"))
console.log(obj.Profession.call(obj, "Software Engineer"))