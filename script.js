document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("please enter a task");
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
      });
    }
  };
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
