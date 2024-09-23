// Finding Valid Users: Given an array of user objects with properties username, email, and active, use filter to get only the active users.

let users = [
    {
        "userName": "johndoe",
        "email": "johndoe@example.com",
        "active": true
    },
    {
        "userName": "janesmith",
        "email": "janesmith@example.com",
        "active": false
    },
    {
        "userName": "bobwhite",
        "email": "bobwhite@example.com",
        "active": true
    },
    {
        "userName": "alicejones",
        "email": "alicejones@example.com",
        "active": false
    },
    {
        "userName": "mikebrown",
        "email": "mikebrown@example.com",
        "active": true
    }
]
function active_users(users) {
    const actives = users.filter((user) => {
        if (user.active) {
            return {
                user
            }
        }
    })
    return actives
}
console.log(active_users(users))