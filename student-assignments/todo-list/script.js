function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  list.innerHTML = "";

  todos.forEach((todo) => {
    let li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";

    if (todo.completed) {
      li.style.textDecoration = "line-through";
    }
    li.textContent = todo.task;

    //

    let span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";

    //

    let checkingIcon = document.createElement("i");
    checkingIcon.className = "fa fa-check";
    checkingIcon.setAttribute("aria-hidden", "true");
    checkingIcon.addEventListener("click", () => {
      todo.completed = !todo.completed;

      if (todo.completed) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    });

    //

    let trashIcon = document.createElement("i");
    trashIcon.className = "fa fa-trash";
    trashIcon.setAttribute("aria-hidden", "true");
    trashIcon.addEventListener("click", () => {
      list.removeChild(li);
    });

    //

    span.appendChild(checkingIcon);
    span.appendChild(trashIcon);
    li.appendChild(span);
    list.appendChild(li);
  });
}

//

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

//

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!

  let theInput = document.getElementById("todoInput");
  let newOne = {
    task: theInput.value,
    completed: false,
  };

  //

  todos.push(newOne);
  populateTodoList(todos);

  //

  theInput.value = "";
}

// OPTIONAL
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).

function deleteAllCompletedTodos() {
  // Write your code here...
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}
