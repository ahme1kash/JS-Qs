let name = 'Aman';
global.name = name;

let obj = {
    name: "Kashif",
    salary: "13LPA",
    Profession: function(prof) {
        return `My Name is ${global.name} and I earn ${this.salary}. I am a ${prof}`;
    }
};

console.log(obj.Profession.call(obj,"Software Engineer"));
