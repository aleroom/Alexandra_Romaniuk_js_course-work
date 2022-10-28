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
  // console.log(todoArray);
  clearInputFields();

  let div = document.createElement('div');
  div.classList.add('div1');
  div.innerHTML = `<p>${task.taskname}</p> <p>${task.msg}</p> <p>${task.deadline}</p> <p>${task.perf}</p> <button class="btn_1">moove</button>`;

  let rootDiv = document.querySelector('.wrap_task');
  rootDiv.append(div);
  document.querySelector(".trash").addEventListener("click", clearInputFields);


  // document.querySelector().addEventListener("click", consoleSmth);

  btns = document.querySelectorAll('.btn_1');
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
          let asddd = this.parentNode.childNodes;
          asddd.forEach(element => {
            if (element.innerHTML !== undefined) {
              console.log(element.innerHTML)
            }
          });
        });
    }

})

function clearInputFields() {
  document.querySelector(".task_name").value = "";
  document.querySelector(".message_input").value = "";
  document.querySelector(".deadline_input").value = "";
  document.querySelector(".performer_input").value = "";
}

