
export const readTask = (taskList)=>{
    const fechas = [];
    taskList.forEach(task =>{
        (!fechas.includes(task.fecha)) && fechas.push(task.fecha)
        
    })

    fechas.sort((a,b)=>{
        return moment(a, "DD/MM/YY") - moment(b, "DD/MM/YY") 
    })

    return(fechas);


}