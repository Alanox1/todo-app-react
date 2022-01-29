import react,{useState} from "react";
import TodoList from "./TodoList";
export default function Form({tareas,setTareas}){

   const [inputValue,setInputValue] = useState("");

    const controlarEnvio = (e) => {
        e.preventDefault();
        if(inputValue.length > 1) {
            setTareas(tareas => [...tareas,inputValue])
            setInputValue("")
        }
       
    }
    const handleChange = (e) => setInputValue(e.target.value)
    
    const eliminarTarea = (id) => {
        tareas.splice(id, 1);
        setTareas([...tareas]);
    }
    return(
        <form onSubmit={controlarEnvio}>
          <input className="input-tarea" type="text" placeholder="Inserte tarea.." value={inputValue} onChange={handleChange}/>
           <button type="submit" className="submit">+</button> 
          <TodoList tareas={tareas} eliminarTarea={eliminarTarea}/>
        </form>
    )
}