const form = document.getElementById('form');

form.onsubmit = function(e) {
    e.preventDefault();
    const description = document.getElementById('task');
    if(description.value != '')
        add_task(description.value);
    else
        alert("Digite alguma tarefa.")
}

function add_task(description) {
    var task_list = document.getElementById('task_list');
    var checkbox = document.createElement('input');
    var label = document.createElement('label');
    var br = document.createElement("br");

    checkbox.type = "checkbox";
    checkbox.id = description;
    checkbox.classList.add("task_checkbox");
    label.htmlFor = description;
    label.classList.add("task_checkbox");
    label.appendChild(document.createTextNode(description));
    task_list.appendChild(checkbox);
    task_list.appendChild(label);
    task_list.appendChild(br);
    document.getElementById('task').value = "";
    document.getElementById('task').focus();
}
