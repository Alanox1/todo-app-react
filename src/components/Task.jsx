export default function Task({tarea,id,eliminarTarea}){
   
    return(
        <li><p>{tarea}</p><button className="boton-eliminar" onClick={() => eliminarTarea(id)}>x</button></li>
    )
}