let employees = [{
    name:"SK Sampat",
    company:"HCL",
    Location: "India",
    Salary:35000

},{
    name:"Usman Shisha",
    company:"LinkedIn",
    Location: "USA",
    Salary:45000

},{
    name:"Javed Alam",
    company:"Illumina",
    Location: "Switzerland",
    Salary:50000

},{
    name:"Uzair",
    company:"Dryotica",
    Location: "Switzerland",
    Salary:55000

}]
let all = employees.filter((employee)=>{
    if (employee.Location === "Switzerland"){
        return employee
    }
}).map((selected)=>{
    let raised_salary = selected.Salary + 20000
       return{...selected,Salary:raised_salary,Pf:20000}
})
console.log(all)