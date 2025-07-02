// Conversion methods
// JSON string to JS object => JSON.parse()
// JS obj to JSON string => JSON.stringify()

// JSON to JS object
const user = `[
    {"name" : "manoj", "age": 30, "id": 1},
    {"name" : "Ramu", "age": 32, "id": 1},
    {"name" : "Krishna", "age": 34, "id": 1}
]`

const user_object = JSON.parse(user)
console.log(user_object)

// JS obj to JSON string
const user_1 = JSON.stringify(user_object)
console.log(user_1)