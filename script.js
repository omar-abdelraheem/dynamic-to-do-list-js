document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("please enter a task");
    } else {
      document.createElement("li").textContent = taskText;
      document
        .createElement("button")
        .textContent("Remove")
        .classList.add("remove-btn")
        .addEventListener("click", () => {
          textContent.remove();
          textContent.appendChild(Remove);
          taskList.appendChild(textContent);
          taskInput.value = "";
        });
    }
  };
  addButton.addEventListener("click", addTask());
  taskInput.addEventListener("keypress", () => {
    if (Event.key === "Enter") {
      addTask();
    }
  });
});
