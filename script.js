const todoList = [];

function addTodolist() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-duedate-input');
  const dueDate = dateInputElement.value;

  if (name === '' || dueDate === '') {
    alert('Please enter both task name and due date.');
    return;
  }

  todoList.push({
    name: name,
    dueDate: dueDate
  });

  inputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();
}

function renderTodoList() {
  const todoListHTML = todoList.map((todoObject, index) => {
    const { name, dueDate } = todoObject;

    return `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete" onclick="deleteTodo(${index})">Delete</button>
    `;
  }).join('');

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}
