import './App.css';
import react,{useState} from 'react';
import Form from './components/Form';
function App() {
  const [tareas,setTareas] = useState([]);
  return (
    <div className="App">
     <h2>TODO</h2>
     <Form setTareas={setTareas} tareas={tareas}/>
    </div>
  );
}

export default App;
