let name = {
    firstname: "Akshay",
    lastname: "Saini"
    }
    let printFullName = function (hometown, state) {
    console.log (this. firstname + " " + this. lastname + " from " + hometown + " "+ state)
    // console.log (this. Name + "'s" +" capital is "+ this. capital + "and capital of " + hometown + " is "+ state)

    }
    printFullName. call (name, "Dehradun", "Uttarakhand");
let second_name = {
        firstname: "Raj",
        lastname: "Singh"
    }
    printFullName. call (second_name, "Dehradun", "Uttarakhand");