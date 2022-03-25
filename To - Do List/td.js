alert("--Todo List--\n\n\nUse cross\'X\' to delete the task\n\n\nThank You...")



var task = "";
var task_number = 1;
const addTodo = () => {
    task = document.getElementById("task").value;
    document.getElementById("task").value = "";
    if(task != "")
        createNewtask(task_number);
    task_number++;
}

var checkedTodo = [];
var completed = [];
const completedTodo = (taskId) => {
    let Id = parseInt(taskId.slice(9));
    let index = checkedTodo.indexOf(Id);
    if(index == -1) {
        document.getElementById(`check-${Id}`).checked = true;
        document.getElementById(`task-${Id}`).classList += ' task-completed';
        document.getElementById(`todo-del-${Id}`).style.visibility = "visible";
        checkedTodo.push(Id);
        completed.push(Id);
    } else {
        let temp = checkedTodo.slice(0, index);
        checkedTodo = temp.concat(checkedTodo.slice(index+1));
        completed.pop();
        document.getElementById(`check-${Id}`).checked = false;
        document.getElementById(`task-${Id}`).classList.remove("task-completed");
        document.getElementById(`todo-del-${Id}`).style.visibility = "hidden";
    }

}

const createNewtask = (t_num) => {
        let newTask = document.createElement("div");
        newTask.setAttribute("class", 'task');
        newTask.setAttribute("id", `task-div-${t_num}`);
        newTask.setAttribute("onclick", `completedTodo(this.id)`);
        let newInput = document.createElement("input");
        newInput.setAttribute("type", "checkbox");
        newInput.setAttribute("id", `check-${t_num}`);
        let newTodoText = document.createElement("span");
        newTodoText.setAttribute("class", "todo-text");
        newTodoText.setAttribute("id", `task-${t_num}`);
        newTodoText.appendChild(document.createTextNode(task));
        let delTodo = document.createElement("span");
        delTodo.setAttribute("class", "todo-del");
        delTodo.setAttribute("id", `todo-del-${t_num}`);
        delTodo.setAttribute("style", `visibility: hidden`);
        delTodo.setAttribute("onclick", `todoDel(this.id)`);
        delTodo.appendChild(document.createTextNode("X"));
        
        newTask.appendChild(newInput);
        newTask.appendChild(newTodoText);
        newTask.appendChild(delTodo);

        document.getElementById(`all-tasks`).appendChild(newTask);
}

const todoDel = (id) => {
    let Id = parseInt(id.slice(9));
    document.getElementById(`task-div-${Id}`).classList += ' todo-div-del';
}


var all_HTML = "";
const completedTask = () => {
    all_HTML = document.getElementById("all-tasks").innerHTML;
    for(let i=1 ; i<task_number ; i++)
    {
        if(completed.indexOf(i) == -1)
            document.getElementById(`task-div-${i}`).style.display = "none";
    }
}

const activeTask = () => {
    all_HTML = document.getElementById("all-tasks").innerHTML;
    for(let i=1 ; i<task_number ; i++)
    {
        if(completed.indexOf(i) != -1)
            document.getElementById(`task-div-${i}`).style.display = "none";
    }
}

const allTask = () => {
    document.getElementById("all-tasks").innerHTML = all_HTML;
}