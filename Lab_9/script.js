let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let sortAscending = true;

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        
        const taskDate = new Date(task.date).toLocaleDateString();

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <div class="task-info">
                <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? "checked" : ""}>
                <span>${task.text} <span class="date-text">(${taskDate})</span></span>
            </div>
            <button class="btn-delete" onclick="deleteTask(${index})">❌</button>
        `;
        
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Введіть текст завдання!");
        return;
    }

    const newTask = {
        text: text,
        completed: false, 
        date: Date.now()  
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
    
    taskInput.value = "";
}


function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1); 
    saveTasks();
    renderTasks();
}


function sortTasksByDate() {
    tasks.sort((a, b) => {
        if (sortAscending) {
            return a.date - b.date; 
        } else {
            return b.date - a.date; 
        }
    });
    
    sortAscending = !sortAscending; 
    saveTasks();
    renderTasks();
}

renderTasks();