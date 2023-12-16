let my_name = String(83989);
console.log(my_name,typeof my_name)
for (let char of my_name){
    console.log(char)
    if (char == "m"){
        console.log("Found")
    }
}
