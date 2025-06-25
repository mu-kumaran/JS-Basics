// map() method returns the new array

// Example -1 : Doubles the numbers
const numbers = [1,2,3,4]
const doubled = numbers.map(value => value*2)
console.log(doubled)

// Example - 2 : Convert Strings to UpperCase
const fruits = ['apple', 'orange', 'banana', 'cherry']
const FRUITS = fruits.map(value => value.toUpperCase())
console.log(FRUITS)

// Example - 3 : Extract Property from array of objects
const users = [
    {name: "Manoj", age: 25},
    {name: "Balu", age: 45},
    {name: "Kumar", age:35}
]

const names = users.map(value => value.name)
const ages = users.map(value => value.age)
console.log(names,ages)

// Example - 4 : Making file paths
const filename = ["file1.txt","file2.txt"]
const paths = filename.map(value => "./filepath/"+value)
console.log(paths)
