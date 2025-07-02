// ✅ 1. splice() — Add or Remove Items from an Array

/*
🔸 splice(startIndex, deleteCount, item1, item2...)
 -  delete count removes no of items starting from the index 
 -  item1,item2... are items to be added
🔹 Changes the original array
*/
const fruits = ['Apple','Banana','Mango']
fruits.splice(2,1)                  // 1 - removes one item from index 2
console.log(fruits)
fruits.splice(1,0,"Orange")         // 0 -removes zero item from index 1 and add 
console.log(fruits)

// ✅ 2. join() — Combine Array Elements into a String
const colors = ['red','blue','green']
const colorString = colors.join(', ')
console.log(colorString)

// ✅ 3. slice() — Copy a Portion of an Array
/* 
🔹 slice(start, end)
🔹 End index is not included
*/
let nums = [10,20,30,40,50]
let new_sums = nums.slice(1,4)
console.log(new_sums)

// ✅ 4. push() and pop() — Add/Remove from End

let names = ['Manoj',"Kumar","Vasan","Kannan"]
names.push("Shravan") // Add new name to the end
console.log(names)
names.pop() // Remove name at the end
console.log(names)

//  ✅ 5. shift() and unshift() — Add/Remove from Start
let tasks = ['task_1','task_2','task_3']
tasks.unshift('start')  // Add to start
console.log(tasks)
tasks.shift() // Remove from start
console.log(tasks)

// reduce() - sums up the value in the array
const numbers = [1, 2, 3, 4, 5];

// Calculate the sum of numbers using reduce
// intially currentValue is 0
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15