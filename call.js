//Node Js Compiler
let myname = 'KASHIF';
global.myname = myname
let obj = {
    myname: "Kashif",
    salary: "13LPA",
    Profession: (prof)=> {
        return `My Name is ${global.myname} and I earn ${this.salary}. I am a ${prof}`;
    }
};

console.log(obj.Profession.call(obj,"Software Engineer"));