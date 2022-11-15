import { createTask } from "./addTask.js";
import { readTask } from "../services/readTask.js";
import dateElement from "./dateElement.js";

export const readTasks = ()=>{
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];

    const list = document.querySelector('[data-list]');
    const fechas = readTask(taskList);
    fechas.forEach(fecha=>{
        
        list.appendChild(dateElement(fecha))

        taskList.forEach(task=>{
            if(fecha == task.fecha){
                list.appendChild(createTask(task));
            }
        })
    })

   
}