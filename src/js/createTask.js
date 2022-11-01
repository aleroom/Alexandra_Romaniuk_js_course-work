import { todoArray } from "./todoArrays.js";
import { inWorkArray} from "./todoArrays.js";
import { doneArray } from "./todoArrays.js";

localStorage.setItem('todoArray', JSON.stringify(todoArray));
localStorage.setItem('inWorkArray', JSON.stringify(inWorkArray));
localStorage.setItem('doneArray', JSON.stringify(doneArray));

let todoArr = JSON.parse(localStorage.getItem('todoArray'));
let inWorkArr = JSON.parse(localStorage.getItem('inWorkArray'));
let doneArr = JSON.parse(localStorage.getItem('doneArray'));


document.querySelector(".create").addEventListener("click", function () {
  let taskname = document.querySelector(".task_name").value;
  let message = document.querySelector(".message_input").value;
  let deadLine = document.querySelector(".deadline_input").value;
  let performer = document.querySelector(".performer_input").value;

  let task = new Task(taskname, message, deadLine, performer)

  todoArr.push(task);
  clearInputFields();

  let div = document.createElement('div');
  div.setAttribute('id', todoArr.length - 1)
  div.classList.add('inner_task');
  div.innerHTML = `<p id ="taskname">${task.taskname}</p> <p id="task_msg">${task.message}</p> <p id="task_deadline">${task.deadline}</p> <p id="task_perf">${task.performer}</p> <button id="${todoArr.length}">moove</button>`;

  let rootDiv = document.querySelector('.wrap_task');
  rootDiv.append(div);
  document.querySelector(".trash").addEventListener("click", clearInputFields);

   let mooveBtn = document.getElementById(todoArr.length);
   mooveBtn.addEventListener("click", function () {
    inWorkArr.push(todoArr[div.getAttribute('id')])
    todoArr.pop
    rootDiv.removeChild(div);
    let inWorkDiv = document.createElement('div');
    inWorkDiv.setAttribute('id', inWorkArr.length - 1);
    inWorkDiv.classList.add('in_work_task');
    let tsk = inWorkArr[inWorkArr.length - 1];
    inWorkDiv.innerHTML = `<p id ="taskname">${tsk.taskname}</p> <p id="task_msg">${tsk.message}</p> <p id="task_deadline">${tsk.deadline}</p> <p id="task_perf">${tsk.performer}</p> <button id="done_${inWorkArr.length}">done</button>`;

    let inWorkRootDiv = document.querySelector('.wrap_in-work');
    inWorkRootDiv.append(inWorkDiv);

    let doneBtn = document.getElementById('done_' + inWorkArr.length);
    console.log('done_' + inWorkArr.length);
    doneBtn.addEventListener("click", function() {
      doneArr.push(inWorkArr[inWorkDiv.getAttribute('id')])
      console.log(doneArr);
      inWorkArr.pop;
      inWorkRootDiv.removeChild(inWorkDiv);
      let doneDiv = document.createElement('div');
      doneDiv.setAttribute('class', doneArr.length - 1);
      doneDiv.classList.add('done_task');
      let tssk = doneArr[doneArr.length - 1];
      doneDiv.innerHTML = `<p id ="taskname">${tssk.taskname}</p> <p id="task_msg">${tssk.message}</p> <p id="task_deadline">${tssk.deadline}</p> <p id="task_perf">${tssk.performer}</p> <button class="rm">remove</button> <button id="gz_${doneArr.length}">Yahoo!!!</button>`;
      let doneRootDiv = document.querySelector('.wrap_done');
      doneRootDiv.append(doneDiv);

      let rmvBtn = document.querySelector('.rm');
      rmvBtn.addEventListener('click', function() {
        doneRootDiv.removeChild(doneDiv);
      })
    })
  });

})

function clearInputFields() {
  document.querySelector(".task_name").value = "";
  document.querySelector(".message_input").value = "";
  document.querySelector(".deadline_input").value = "";
  document.querySelector(".performer_input").value = "";
}

function Task (taskname, message, deadline, performer) {
  this.taskname = taskname;
  this.message = message;
  this.deadline = deadline;
  this.performer = performer;
}