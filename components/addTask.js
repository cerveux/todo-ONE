import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { readTasks } from './readTasks.js'; 



export const addTask = (evento)=>{
    evento.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendario = document.querySelector("[data-form-date]");

    const value = input.value;
    const date = calendario.value;  
    const fecha = moment(date).format("DD/MM/YYYY");

    input.value = '';
    calendario.value = "";

    if(value == "" || fecha == ""){
        return
    };

    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];

    const id = (uuid.v4());
    const complete = false



    const tasks = {
        id,
        complete,
        value,
        fecha
    }

    taskList.push(tasks);
    localStorage.setItem("tasks", JSON.stringify(taskList))

    list.innerHTML = "";
    readTasks()
    /* const task = createTask(tasks);
    list.appendChild(task); */

}

export const createTask = ({id, complete, value, fecha}) => {
  
  
  
  const task = document.createElement('li');
  task.classList.add('card');
  const taskContent = document.createElement('div');
  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;

  const timeTask = document.createElement("span");
  timeTask.innerText = fecha;

  const check = checkComplete(id)

  if(complete == true){
    check.classList.toggle('fas');
    check.classList.toggle('completeIcon');
    check.classList.toggle('far');
  }


  taskContent.appendChild(check);
  taskContent.appendChild(titleTask);
  // task.innerHTML = content;

  task.appendChild(taskContent);
  task.appendChild(timeTask)
  task.appendChild(deleteIcon(id));

  return task
  
};