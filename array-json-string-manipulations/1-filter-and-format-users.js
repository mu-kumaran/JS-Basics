/**
 Scenario:
You receive a list of users (JSON), and you need to:

Extract users whose names include a given substring (string manipulation).

Sort them by age (array manipulation).

Format and display the results in a clean structure (string + JSON manipulation).
 */


// Sample JSON: list of user objects
const usersJSON = `[
  { "id": 1, "name": "Alice Johnson", "age": 28 },
  { "id": 2, "name": "Bob Smith", "age": 35 },
  { "id": 3, "name": "Charlie Adams", "age": 24 },
  { "id": 4, "name": "David Johansson", "age": 30 },
  { "id": 5, "name": "Eve Jackson", "age": 22 }
]`;

// Parse JSON string into a JS array
const users = JSON.parse(usersJSON)
console.log(users)

// Filter users whose name includes 'son' (case insensitive)
keyword = 'son'
const filteredUsers = users.filter(user => user.name.toLowerCase().includes(keyword))
console.log(filteredUsers)

// Sort by age (ascending)
filteredUsers.sort((a,b) => a.age - b.age) // for descending order b - a
console.log(filteredUsers)

// Format result into display-friendly strings
const formattedOutput = filteredUsers.map(user => 
    `${user.name} (Age: ${user.age})`
)
console.log(formattedOutput)

// Print the results
console.log("Filtered users :")
formattedOutput.forEach(item => console.log(item))

// forEach() → runs a function once for each item in the array.
// console.log(line) → prints each formatted string line to the console.

/*
Explanation of Important Functions
Function	Type	What It Does
JSON.parse()	JSON	Converts JSON string to JavaScript object/array
.filter()	Array	Returns a new array with only items that pass a test
.map()	Array	Transforms each item into something new, returns a new array
.sort()	Array	Sorts array based on a compare function
.forEach()	Array	Runs a function for each item in array, returns nothing
.toLowerCase()	String	Converts string to all lowercase letters
.includes()	String	Checks if a string contains another string
*/

/*
Concepts Covered:
Concept	Example in Code
String manipulation	.toLowerCase(), .includes()
Array manipulation	.filter(), .sort(), .map(), .forEach()
JSON manipulation	JSON.parse() to convert a JSON string to JS object
*/
