let val = "sun"
function outer(){
    console.log("Hello I am from Outer")
    function inner(){
        console.log("I am inner")
        console.log(`The ${val} rises in the east`)

    }
    
    inner()

}
outer()