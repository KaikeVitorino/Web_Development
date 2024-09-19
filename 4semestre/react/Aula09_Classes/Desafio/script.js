function addTask() {
    var input = document.getElementById('taskInput');
    var newTask = input.value;
    if (newTask) {
        var li = document.createElement('li');
        li.textContent = newTask;
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = function() {
            li.parentNode.removeChild(li);
        };
        li.appendChild(removeButton);
        document.getElementById('tasksList').appendChild(li);
        input.value = "";
    } else {
        alert("Por favor, digite uma tarefa.");
    }
}