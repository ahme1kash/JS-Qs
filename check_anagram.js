function isAnagram(){
let str1 = "listen"
let str2 = "silent"
if (str1.length!= str2.length){
    return "Not Anagram!"
}
else{
sorted_str1 = str1.split('').sort().join('')
sorted_str2 = str2.split('').sort().join('')
console.log(sorted_str1,sorted_str2)
return sorted_str1 === sorted_str2? 'Valid Anagram':"Not valid Anagram!"
}
}
console.log(isAnagram())