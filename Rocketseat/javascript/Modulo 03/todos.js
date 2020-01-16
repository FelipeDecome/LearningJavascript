var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = "";

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var deleteElement = document.createElement('a');
        var deleteText = document.createTextNode('Apagar');

        var pos = todos.indexOf(todo);
        deleteElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

        deleteElement.setAttribute('href', '#');
        deleteElement.appendChild(deleteText);
        listElement.appendChild(deleteElement);

    }
}

renderTodos();

buttonElement.addEventListener('click', addTodo);

function addTodo() {
    if (inputElement.value) {
        var todoText = inputElement.value;

        todos.push(todoText);
        inputElement.value = "";
        renderTodos();
        saveToStorage();
    }

}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
