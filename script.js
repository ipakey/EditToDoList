window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#new-task-input')
    const list_el = document.querySelector('#tasks')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const task = input.value 
        if (!task){
            alert("please fill out the task to save ")
            return
        }

        // ? define task wrapper
        const task_el = document.createElement("div")
        task_el.classList.add("tasks")

// ?define task content 
const task_content_el = document.createElement("div")
        task_content_el.classList.add('content')
        task_content_el.innerText = task
        task_el.appendChild(task_content_el)

        // ? define task input
        const task_input_el = document.createElement("input")
        task_input_el.classList.add("text")
        task_input_el.type = "text"
        task_input_el.setAttribute("readonly","readonly")
        
    // ?add task to task_content
    task_content_el.appendChild(task_input_el)
        
    // ? define actions div
    const task_actions_el = document.createElement("div")
    task_actions_el.classList.add("actions")

        // ? define buttons for each task
        const task_edit_el = document.createElement("button")
        task_edit_el.classList.add("edit")
        task_edit_el.innerHTML= "Edit"

        const task_delete_el = document.createElement("button")
        task_delete_el.classList.add("delete")
        task_delete_el.innerHTML= "Delete"

    // ? add buttons to task
    task_actions_el.appendChild(task_edit_el)
    task_actions_el.appendChild(task_delete_el)

// ? add actions to task 
task_el.appendChild(task_actions_el)


        // ? add task to section full list in #tasks 
        list_el.appendChild(task_el)

        input.value = ""

        task_edit_el.addEventListener('click', () => {
            if(task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly")
                task_input_el.focus()
                task_edit_el.innerText = "Save"
            } else {
                task_input_el.setAttribute("readonly", "readonly")
                task_edit_el.innerText = "Edit"
            }
        })

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el)
        })

    })
})