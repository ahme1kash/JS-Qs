// Filtering by Criteria: Given an array of objects representing students with properties name and grade, use filter to get only the students who have grades above a certain threshold.
function filter_grades(grades) {
    let threshold_grade = 6;
    const filtered_grades = grades.filter((data) => {
        if (data.grade > threshold_grade)
            return { data }
    })
    return filtered_grades

}
let eveluation_obj = [{
    name: "John",
    grade: "6",

}, {
    name: "Kareem",
    grade: "7",

}, {
    name: "Sohail",
    grade: "8",

}, {
    name: "jane",
    grade: "10",

}, {
    name: "Preeety",
    grade: "9",

},]
const filtered_output = filter_grades(eveluation_obj)
console.log(filtered_output)