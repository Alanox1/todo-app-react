import Task from "./Task"
export default function TodoList({tareas,eliminarTarea}){

    const ListaTareas = tareas.map((el,index) => (
      <Task key={index} tarea={el} id={index} eliminarTarea={eliminarTarea}/>
    ))

    return(
        <ul>
            {ListaTareas}
        </ul>
    )
}