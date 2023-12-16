// // Method 1
// function reverse(string){
//     let final = ''
//     let reversed = string.split(' ')
//     reversed.forEach((word,idx)=>{
//         for (let i = word.length-1;i>=0;i--){
//             final += word[i]
//         }
//         // Additional one space adds to the end so checking this condition
//         if (idx<reversed.length-1){
//             final += ' '
//         }

//     })
//     console.log(final,final.length)
// }
// reverse("Hello I am SDE")



// Method 2

function ReverseString(sentence){
    let final = ''
    let rev_arr = sentence.split(' ').map((word)=>{
        return word.split('').reverse().join('')
        
        
    })
    // console.log(rev_arr)
    console.log(rev_arr.join(" "))
}
ReverseString("Hello I am SDE")