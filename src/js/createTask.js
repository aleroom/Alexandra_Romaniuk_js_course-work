import { todoArray } from "./todoArrays.js";

document.querySelector(".create").addEventListener("click", function () {
  let taskName = document.querySelector(".task_name").value;
  let message = document.querySelector(".message_input").value;
  let deadLine = document.querySelector(".deadline_input").value;
  let performer = document.querySelector(".performer_input").value;

  let task = {
    taskname: taskName,
    msg: message,
    deadline: deadLine,
    perf: performer,
  };

  todoArray.push(task);
  console.log(todoArray);
  clearInputFields();

  for (let index = 0; index < todoArray.length; index++) {
    console.log(todoArray[index]);
    let parentDiv = document.querySelector(".wrap_task");
    let taskFromArray = todoArray[index];
    parentDiv.innerHTML += createTemplate(taskFromArray);
  }
});

document.querySelector(".trash").addEventListener("click", clearInputFields);

function clearInputFields() {
  document.querySelector(".task_name").value = "";
  document.querySelector(".message_input").value = "";
  document.querySelector(".deadline_input").value = "";
  document.querySelector(".performer_input").value = "";
}

const createTemplate = (task) => {
  // return (template = `
  // <div class="notes_name">task_name=${task.taskname}</div>
  // <div class="notes_name" message="${task.message}"></div>
  // <div class="notes_name" deadline="${task.deadLine}"></div>
  // <div class="notes_name" performer="${task.performer}"></div>
  // `);

  return (template = `
        <div class="todo_note">
            <div class="notes_name">task_name=${task.taskname}
            </div>
            <div class="notes_message">message=${task.message}
            </div>
            <div class="calendar_notes">deadLine=${task.deadLine}
            </div>
            <div class="performer_notes">performer=${task.performer}
            </div>
    </div>
    `);
};
