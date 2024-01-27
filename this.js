function personInfo(){
    console. log(`person name is ${this.firstName}`)
    }
    const person1 = {
    firstName : "harsh",
    age: 8,
    about: personInfo
    }
    const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
    }
    const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
    }
    person1.about()
    
    person1.about.call(person1)