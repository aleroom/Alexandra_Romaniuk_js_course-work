import { todoArray } from "./todoArrays.js";
import { inWorkArray} from "./todoArrays.js";

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
  clearInputFields();

  let div = document.createElement('div');
  div.setAttribute('id', todoArray.length - 1)
  div.classList.add('inner_task');
  div.innerHTML = `<p id ="taskname">${task.taskname}</p> <p id="task_msg">${task.msg}</p> <p id="task_deadline">${task.deadline}</p> <p id="task_perf">${task.perf}</p> <button id="${todoArray.length}">moove</button>`;

  let rootDiv = document.querySelector('.wrap_task');
  rootDiv.append(div);
  document.querySelector(".trash").addEventListener("click", clearInputFields);

   let btnnnnn = document.getElementById(todoArray.length);
   btnnnnn.addEventListener("click", function () {
    inWorkArray.push(todoArray[div.getAttribute('id')])
    todoArray.pop
    console.log(inWorkArray);
    
    rootDiv.removeChild(div);

    let inWorkDiv = document.createElement('div');
    inWorkDiv.setAttribute('id', inWorkArray.length - 1);
    inWorkDiv.classList.add('in_work_task');
    let tsk = inWorkArray[inWorkArray.length - 1];
    console.log(tsk)
    inWorkDiv.innerHTML = `<p id ="taskname">${tsk.taskname}</p> <p id="task_msg">${tsk.msg}</p> <p id="task_deadline">${tsk.deadline}</p> <p id="task_perf">${tsk.perf}</p> <button id="${inWorkArray.length}">moove</button>`;

    let inWorkRootDiv = document.querySelector('.wrap_in-work');
    inWorkRootDiv.append(inWorkDiv);

  });

})

function clearInputFields() {
  document.querySelector(".task_name").value = "";
  document.querySelector(".message_input").value = "";
  document.querySelector(".deadline_input").value = "";
  document.querySelector(".performer_input").value = "";
}

