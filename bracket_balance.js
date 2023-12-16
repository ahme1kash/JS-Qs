function bracket(str){
let arr = []
let count = 0
let sum = 0
 const open_brackets = ['(','{','[']
 const close_brackets = [')','}',']']
 for(let char of str){
    if (open_brackets.includes(char)){
        arr.push(char)
        count+=1

    }
    else if (close_brackets.includes(char)){
        if (char == ')' && arr[arr.length-1] == '('){
            arr.pop()
            count-=1
            sum+=1
        }
       else if (char == '}' && arr[arr.length-1] == '{'){
        arr.pop()
            count-=1
            sum+=1
        }
       else if (char == ']' && arr[arr.length-1] == '['){
            arr.pop()
            count-=1
            sum+=1
        }
    }
 }
 if (count == 0){
    console.log(arr)
    console.log("Balanced",`Total bracket pairs are ${sum}`)
 }
 else{
    console.log("Not Balanced",`Total bracket pairs are ${sum}`)
 }

}
bracket('[]{]')
bracket('[)({]')
bracket('{()}')
bracket('{}([]{})')