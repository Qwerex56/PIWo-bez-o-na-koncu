const TodoListInput = document.querySelector("#task-add");
const TodoListView = document.querySelector(".todo-list");
const AddTaskButton = document.querySelector(".add-task-button");

let taskText = "";

TodoListInput.addEventListener("input", (ev) => {
    taskText = ev.target.value;
});

AddTaskButton.addEventListener("click", async (ev) => {
    if (taskText.length <= 0) {
        return;
    }

    const item = await CreateListItem(taskText);
    item.addEventListener("click", (ev) => {
        const target = ev.target;
        if (target.classList.contains("task-completed")) {
            target.classList.remove("task-completed");
            return;
        }

        ev.target.classList.add("task-completed");
    });

    item.querySelector(".delete-button").addEventListener("click", (ev) => {
        item.remove();
    });

    TodoListView.append(item);
});

const CreateListItem = async (innerText) => {
    const response = await fetch("./task_item.html");
    let elementAsText = await response.text();

    elementAsText = elementAsText.replace("#", innerText);

    const parser = new DOMParser();
    const element = parser.parseFromString(elementAsText, "text/html");

    return element.querySelector(".task-item");
}

const CreateListItemText = (innerText) => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = today.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return innerText + "    " + formattedDate;
}