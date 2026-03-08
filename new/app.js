const addTodoBtn = document.getElementById("add-Todo-btn")
const todoInput = document.getElementById("todoInput")
const UlTodoList = document.getElementById("TodoList");
const item_left = document.getElementById("item_left");


let todoText;
let todos = [];

let todoString = localStorage.getItem("todos");
if (todoString) {
    todos = JSON.parse(todoString)
    item_left.innerHTML = todos.filter(todo => {
        return todo.isCompleted != true
    }).length;
}




// populate todos

const populateTodos = () => {
    let string = "";
    for (const todo of todos) {
        string += `<li id="${todo.id}" class="todo-item" ${todo.isCompleted ? "completed" : ""}>
                <input type="checkbox" class="todo-checkbox" ${todo.isCompleted ? "checked" : ""}>
                <span class="todo-text">${todo.title}</span>
                <button class="delete-btn">x</button>
                </li>`
    }

    UlTodoList.innerHTML = string;


    // handling delete x

    const delete_btn = document.querySelectorAll(".delete-btn")

    delete_btn.forEach(element => {
        element.addEventListener("click", (e) => {
            console.log(e.target.parentNode.id)

            // give them alert that are you sure!
            let confirmation = confirm("Are you Sure? You want to Delete ?");
            if (confirmation) {

                todos = todos.filter((todo) => {
                    return (todo.id !== e.target.parentNode.id)
                })

                item_left.innerHTML = todos.filter(todo => {
                    return todo.isCompleted != true
                }).length

                localStorage.setItem("todos", JSON.stringify(todos))
                populateTodos()
            } // confirmation
        })
    });


    // clear completed;
    const ClearCompleteBtn = document.getElementById("ClearCompleteBtn");

    ClearCompleteBtn.addEventListener("click", () => {
        let confirma = confirm("Are you sure !! You want to deleted Completed todos ?")
        if(confirma){

            todos = todos.filter((todo) => todo.isCompleted == false);
    
            populateTodos();
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    })


}



// add btn
addTodoBtn.addEventListener("click", () => {
    todoText = todoInput.value
    console.log(todoText)

    if (todoText.trim().length < 4) {
        alert("you Cannot Assign that small Todo")
        return;
    }

    todoInput.value = "";

    let todo = {
        id: "todo-" + Date.now(),
        title: todoText,
        isCompleted: false
    }

    todos.push(todo);

    item_left.innerHTML = todos.filter(todo => {
        return todo.isCompleted != true
    }).length

    populateTodos()
    localStorage.setItem("todos", JSON.stringify(todos));
})

populateTodos();


// checkboxes

const todoCheckboxs = document.querySelectorAll(".todo-checkbox");

todoCheckboxs.forEach((element) => {
    element.addEventListener("click", (e) => {
        console.log(e.target.checked)

        if (e.target.checked) {
            element.parentNode.classList.add("completed");

            todos = todos.map(todo => {
                if (todo.id == element.parentNode.id) {
                    return { ...todo, isCompleted: true }
                }
                else {
                    return todo
                }
            })
            item_left.innerHTML = todos.filter(todo => {
                return todo.isCompleted != true
            }).length

            localStorage.setItem("todos", JSON.stringify(todos))


        }
        else {
            element.parentNode.classList.remove("completed");

            todos = todos.map(todo => {
                if (todo.id == element.parentNode.id) {
                    return { ...todo, isCompleted: false }
                }
                else {
                    return todo;
                }
            })

            item_left.innerHTML = todos.filter(todo => {
                return todo.isCompleted != true
            }).length

            localStorage.setItem("todos", JSON.stringify(todos))
        }
    })
})


 // Active Todo
 const All_todo = document.getElementById("All_todo")
 const activeTodo = document.getElementById("active_todo")
 const completedTodo = document.getElementById("completed_todo")

  // all Todo
 All_todo.addEventListener("click", () =>{
    return todos
    populateTodos();
    localStorage.setItem("todos", JSON.stringify(todos))
 })

 // active todo
 activeTodo.addEventListener("click", () =>{
    todos = todos.filter((todo) => todo.isCompleted == false)
    populateTodos();
    localStorage.setItem("todos", JSON.stringify(todos))
 })

 // complete todo
 completedTodo.addEventListener("click", () =>{
    todos = todos.filter((todo) => todo.isCompleted != false)
    populateTodos();
    localStorage.setItem("todos", JSON.stringify(todos))
 })






