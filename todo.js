const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
  const task = input.value;
  if (task.trim() === '') return;
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = task;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    list.removeChild(li);
  });
  li.appendChild(span);
  li.appendChild(deleteButton);
  list.appendChild(li);
  input.value = '';
});
