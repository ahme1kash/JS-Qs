// Transforming Data: Given an array of user objects, each with a name and birthYear, use map to create an array of objects with name and age (calculated based on the current year).


function transform_data(users) {
    const date = new Date()
    const transformed_data = users.map((user) => {

        return (
            {
                name: user.name,
                birth_year: date.getFullYear() - user.birth_year
            }

        )


    })
    console.log(transformed_data)
}
transform_data([{ name: "Kashif", birth_year: 1995 }])