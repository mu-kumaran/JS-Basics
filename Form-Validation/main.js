const todos = [
    {
        id:1,
        task:'take out trash',
        isCompleted: true
    },
    {
        id:2,
        task:'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        task:'Doctor appointment',
        isCompleted: false
    }
]

console.log(todos)
console.log(todos[1]['task'])
console.log(JSON.stringify(todos))

for(let i=0; i<todos.length; i++){
    console.log(todos[i].task)
}

for(let itr of todos){
    console.log(itr.id)
}

todos.forEach((todo) => {
    console.log(todo.task)
})

const todo_task = todos.map((todo) => {
    return todo.task
})

console.log(todo_task)

const todo_completed_task = todos.filter((todo) => {
    return todo.isCompleted == true;
}).map((todo) => {
    return todo.task
})

console.log(todo_completed_task)