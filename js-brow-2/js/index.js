// obtener referencias a los elementos del DOM
const newItemForm = document.querySelector("#new-item-form");
const newItemInput = document.querySelector("#new-item-input");
const todoList = document.querySelector("#todolist");

// crear una matriz vacía para almacenar las tareas
let todos = [];

// función para renderizar la lista de tareas
function renderTodoList() {
  // limpiar la lista antes de volver a renderizar
  todoList.innerHTML = "";

  // crear un elemento de lista para cada tarea
  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    // crear una casilla de verificación para indicar si la tarea está completa
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
      todos[index].completed = checkbox.checked;
      renderTodoList();
    });

    // crear un elemento de texto para la descripción de la tarea
    const description = document.createElement("span");
    description.innerText = todo.description;
    description.classList.add("description");

    // crear un botón para eliminar la tarea
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "Eliminar";
    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      renderTodoList();
    });

    // agregar los elementos a la lista
    li.appendChild(checkbox);
    li.appendChild(description);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// función para agregar una nueva tarea a la lista
function addNewTodoItem(description) {
  const newTodo = {
    description: description,
    completed: false,
  };

  todos.push(newTodo);

  renderTodoList();
}

// agregar un evento de escucha para enviar el formulario
newItemForm.addEventListener("submit", (event) => {
  // evitar el comportamiento predeterminado del formulario
  event.preventDefault();

  // obtener la descripción de la nueva tarea del campo de entrada de texto
  const description = newItemInput.value.trim();

  // agregar la nueva tarea a la lista
  addNewTodoItem(description);

  // limpiar el campo de entrada de texto
  newItemInput.value = "";
});
