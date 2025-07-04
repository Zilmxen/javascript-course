const todoList = ['Watch Movie', 'Wash Dishes'];

function renderTodoHTMl() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
  const todo = todoList[i];
  const addHTML = `<p>${todo}</p>`;
  todoListHTML += addHTML;
}
  console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function handleTodo() {
  const inputElement = document.querySelector('.js-todo-input');
  const nameTodo = inputElement.value;
  todoList.push(nameTodo);
  inputElement.value = '';
  renderTodoHTMl()
}









