//Default classnames for styles
const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

//Global constants to get the data by specific ids
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

//Local constants to get some temporary data for the Javascript part
var contadortodo = 0; 
var unchecked = 0;

function newTodo() {
  //Creation of the div that contains the other elements
  var contenedor = document.createElement("div");
  contenedor.setAttribute("class", "todo-container");
  contenedor.setAttribute("type", "div");
  list.appendChild(contenedor);
  
  //Creation of the checkbox element and an attribute to count the checks checked or unchecked
  var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("class", "todo-checkbox");
  check.setAttribute("id", contadortodo);
  check.setAttribute("onClick","completado()");
  contenedor.appendChild(check);

  //Creation of the textarea that permits to write the pending matters
  var txt = document.createElement("input");
  txt.setAttribute("type", "textarea");
  txt.setAttribute("class", "todo-text");
  contenedor.appendChild(txt);

  //Augment of the count of checks unchecked and todos when the new todo is created
  contadortodo = contadortodo + 1;
  unchecked = unchecked + 1;
  
  //Update of the number of uncheckeds and todos in screen
  itemCountSpan.innerHTML = contadortodo;
  uncheckedCountSpan.innerHTML = unchecked;
}

//function that is executed when a checkbox is checked or unchecked, permits the count of unchecked checkboxes and then update the count
function completado(){
  unchecked = contadortodo;
  for(identifier = 0; identifier < (contadortodo); identifier++){
    if(document.getElementById(identifier) != null){
      if (document.getElementById(identifier).checked) {
        unchecked--;
      }
    }
  }
  uncheckedCountSpan.innerHTML = unchecked;
}
