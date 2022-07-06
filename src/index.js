const list = document.getElementById('task-list');
const task = document.getElementById('input-task');
let checkboxes = document.querySelectorAll('input[type=checkbox]');

let tasks = JSON.parse(localStorage.getItem('todo-list')) || [];
displayTasks();

function markCompleted(){
    checkboxes = document.querySelectorAll('input[type=checkbox]');
    [...checkboxes].forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {
            if(checkbox.nextElementSibling.classList.contains('finished')){
                checkbox.nextElementSibling.classList.remove('finished')
            } else {
                checkbox.nextElementSibling.classList.add('finished')
            }
        });
    });
}

function deleteItem(index) {
    tasks.splice(index, 1);
    localStorage.setItem('todo-list', JSON.stringify(tasks))
    displayTasks();
}

function addItem() {
    tasks.push({
        value: task.value,
        checked: false,
    })

    localStorage.setItem('todo-list', JSON.stringify(tasks));
    task.value='';
displayTasks();
}

function displayTasks(){
    let items = ""
    tasks.forEach(function(task) {
       items +=`<li><input type="checkbox"><span class="task">${task.value}</span>
        <button class="delete-btn" onclick="deleteItem();">btn</button></li>`
    })
    list.innerHTML = items;
    markCompleted();
}







