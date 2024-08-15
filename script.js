document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to save tasks to Local Storage
  const saveTasks = () => {
    const tasks = [];
    taskList.querySelectorAll("li").forEach((task) => {
      tasks.push(task.firstChild.textContent); // Save only the task text, excluding the "Remove" button text
    });
    localStorage.setItem("loadTasks", JSON.stringify(tasks));
  };

  // Function to add a task
  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task");
    } else {
      const todo = document.createElement("li");
      todo.textContent = taskText;
      taskList.appendChild(todo);
      taskInput.value = "";

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("remove-btn");
      todo.appendChild(removeBtn);

      removeBtn.addEventListener("click", () => {
        todo.remove();
        saveTasks(); // Update Local Storage after removing a task
      });

      saveTasks(); // Save tasks to Local Storage after adding a new task
    }
  };

  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Load tasks from Local Storage when the page loads
  let tasks = localStorage.getItem("tasks");
  if (tasks) {
    tasks = JSON.parse(tasks);
    tasks.forEach((task) => {
      const todo = document.createElement("li");
      todo.textContent = task;
      taskList.appendChild(todo);

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("remove-btn");
      todo.appendChild(removeBtn);

      removeBtn.addEventListener("click", () => {
        todo.remove();
        saveTasks(); // Update Local Storage after removing a task
      });
    });
  }
});
