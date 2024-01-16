document.getElementById('title').innerHTML = 'Task Manager';
document.getElementById('sub_title').innerHTML = 'Prepare your tasks in one place';

function addSubject(){
  let input = document.querySelector('#input');
  let taskList = document.querySelector('#task');
  let newTask = document.createElement('li');
  
  let removeButton = document.createElement('a');
  removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  
  removeButton.onclick = function(){
    taskList.removeChild(newTask);
  }
  
  newTask.innerHTML = input.value;
  newTask.appendChild(removeButton);
  taskList.appendChild(newTask);
  
  input.value = '';
}