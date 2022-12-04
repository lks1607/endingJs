const worldCup_form = document.querySelector(".worldCuptodo-form");
const worldCup_input = worldCup_form.querySelector("input");
const worldCup_todo = document.querySelector("#worldCuptodo-list");

let worldCuptodos = [];

const worldCup_todos_KEY = "worldCup_todos"

function saveToDos(){
    localStorage.setItem(worldCup_todos_KEY , JSON.stringify(worldCuptodos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    worldCuptodos = worldCuptodos.filter(toDo =>toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    worldCup_todo.appendChild(li);
}

function evnettodos(event){
    event.preventDefault();
    const newTodo = worldCup_input.value;
    worldCup_input.value="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }


    worldCuptodos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

worldCup_form.addEventListener("submit",evnettodos);


const savedTodos = localStorage.getItem(worldCup_todos_KEY);
if(savedTodos !== null){
    const parsedToDos = JSON.parse(savedTodos);
    worldCuptodos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}