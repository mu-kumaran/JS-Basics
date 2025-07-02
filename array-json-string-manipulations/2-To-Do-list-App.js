/*
 1. To-Do List App (Basic Functionality)
Concepts Used:

Add new tasks → push()

Display tasks → map() or forEach()

Delete a task → splice()

Mark task done → find() or update by index

Convert list to JSON for saving → JSON.stringify()
 */

let to_do_list = [];

// Add tasks
function add_task(task_name){
    to_do_list.push({Task: task_name,done: false})
}

// Show tasks
function show_task(){
    console.log("Tasks list :")
    to_do_list.forEach((item,index) => {
        const status = item.done? "completed" : "incomplete";
        console.log(
            `${index + 1}. ${item.Task} - ${status}`
        )
    })
}

// Complete tasks
function complete_task(index){
    to_do_list[index - 1].done = true;
}

// Delete tasks
function delete_task(index){
    to_do_list.splice(index - 1, 1)
}

// Export tasks - Convert to JSON string (save to backend/localStorage)
function export_tasks(){
    return JSON.stringify(to_do_list)
}

// Example usage
add_task("Build a To-Do-App")
add_task("Write a table of contents")
add_task("Work on JS basics")
add_task("Further tasks to be added....")
show_task()

complete_task(1) // Mark 1st task as done
show_task()

delete_task(4) // Delete 4th task
show_task()

console.log("Exported JSON :",export_tasks())


/*
Summary of Concepts in the To-Do App:
Concept	Used in Function	Purpose
push()	addTask()	Add new task
forEach()	showTasks()	Display list with index
splice()	deleteTask()	Remove a task by index
Object/Boolean	task object with done	Status handling
JSON.stringify()	exportTasks()	Save/export JSON format
 */


