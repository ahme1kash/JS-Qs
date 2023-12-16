const company = {
    name:"Microsoft",
    location:"Hyderabad",
    address:"Banjara Hills",
    profession:function(){
        console.log(`${this.name} is an oldest foreign IT company established in 1998 in ${this.location} at ${this.address}.`)
    }
    
}
const company2 = {
    name:"Amazon",
    location:"Hyderabad",
    address:"Old Mechanic House"
}
company.profession()
company.profession.call(company2)
company.profession.call(company)