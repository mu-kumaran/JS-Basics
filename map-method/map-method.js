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

// mapping objects

const person = {
    name: "John",
    age : 30
}

Object.entries(person).map(([key,value]) => {
    console.log(key,':',value)
})

Object.keys(person).map((keys) => {
    console.log(keys)
})

Object.values(person).map((values) => {
    console.log(values)
})

Object.values(person).map((values,index) => {
    console.log(values,index)
})

/*
What Object.entries(obj) returns:
[
  ['name', 'John'],
  ['age', 30]
]
Note : Here there is an array inside array
so we use  .map( ([key,value]) => ... ) syntax for destructuring ['name','John'] 

What Object.keys(obj) returns:
[name, age]
here we use .map((key) => ....) or .map((key,index) => ...)

What Object.values(obj) returns:
[John, 30]
 */

/*  Important Note in map method()
What .map() Really Does
.map() is a built-in JavaScript array method that:
Takes a callback function.

Applies that function to each element in the array.

Returns a new array with the results of each callback call.

Syntax:

array.map((element, index) => {
  return transformedElement;
});

✅ Correct Example with return:
js
Copy
Edit
const numbers = [1, 2, 3];
const doubled = numbers.map(num => {
  return num * 2;
});
console.log(doubled); // [2, 4, 6]
If you remove the return, you get undefined:

js
Copy
Edit
const doubled = numbers.map(num => {
  num * 2; // ❌ no return!
});
console.log(doubled); // [undefined, undefined, undefined]
*/