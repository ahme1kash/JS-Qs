function Longest(word) {
    new_arr = [], word_len = 0, max_length_word = Number.MIN_SAFE_INTEGER, max_idx = Number.MIN_SAFE_INTEGER,
        word_arr = word.split(" ");
    if (word_arr.length == 0) {
        return false
    }
    word_arr.forEach((word, idx) => {
        word_len = word.length;
        if (word_len > max_length_word) {
            max_idx = idx;
            max_length_word = word_len
        }
    })
    return word_arr[max_idx];
}
console.log(Longest("mountain and seas , By the frees"))