const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


function newTodo() {
  alert('New pending matter button clicked!')
  var contenedor = document.createElement("div");
  contenedor.setAttribute("class", "contenedor");
  contenedor.setAttribute("type", "div");
  list.appendChild(contenedor);

  var check = document.createElement("checkbox");
  TODO_CHECKBOX.setAttribute("type", "checkbox");


  var txt = document.createElement("textarea");
  TODO_TEXT.setAttribute("type", "textarea");

}
