// Formatting Strings: Given an array of sentences, use map to convert the first letter of each word in each sentence to uppercase.

function title_case(sentences) {
    const titles = sentences.map((sentence) => {
        word_arr = sentence.split(" ");
        const mod_sentence = word_arr
            .map((word) => {
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(" ");

        return mod_sentence;
    });

    return titles;
}
sample_str_arr = [
    "jack is a good boy",
    "I am one of the most smartest person I've met.",
]
console.log(
    title_case(sample_str_arr)
);
