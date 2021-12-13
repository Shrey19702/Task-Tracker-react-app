import { useEffect ,useState } from 'react'
import Header from './components/Header.js'
import Tasks from './components/tasks.js'
import ADD_FORM from './components/add-Form.js'
import './App.css'

function App() {
  const [tasks , setTask] = useState([]);
  const [addForm, setAddForm] = useState(false);  

  const [editData, setEditData] = useState(false);
  const [taskToEdit,setTaskToEdit]=useState({
    "text": "",
    "day": "",
    "reminder": false,
    "id": 0
  });

  useEffect(
    ()=>{
      const getTask = async ()=>{
        const taskFromServer = await fetchTasks();
        setTask(taskFromServer);
      }
      getTask();
    }
  ,[])

  //fetch tasks
  const fetchTasks= async ()=>{
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json()
  
    return (data);
  }

  //fetch task
  const fetchTask= async (id)=>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json()
  
    return (data);
  }

  //Add task
  const addTask= async(task)=>{
    const res = await fetch(
      'http://localhost:5000/tasks',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      }
    );
    
    const data = await res.json();

    setTask([...tasks, data]);
  }

  //delete
  const deleteTask = async (id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'});
    setTask(
      tasks.filter((task)=> task.id !== id )
    );
  };

  //toggle reminder
  const  reminder = async(id)=>{

    const taskToToggle = await fetchTask(id);
    const updTask={ ...taskToToggle,
    reminder: !taskToToggle.reminder}

    await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method:'PUT',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(updTask)
      }
    );
    // const data = await res.json()
    
    setTask(
      tasks.map(
        (task)=>{
          return (task.id ===id)?{...task, reminder:(!task.reminder)}: task ;
        }
      )
    );
  }

  const Edit_func = async(id)=>{
    const task = await fetchTask(id);
    setTaskToEdit(task);
    deleteTask(id);
    // console.log(taskToEdit);
  }

  //Add button

  return (    // can return only one parent element
    <div className="App">

      <Header addForm={addForm} setAddForm={setAddForm}/>

      { tasks.length >0 ?
        <Tasks 
        addForm={addForm} setAddForm={setAddForm}
        setEditData={setEditData} Edit_func={Edit_func}
        tasks= {tasks} 
        toggleRem={reminder}
        onDelete={deleteTask}/>
        :
        <p className="no-task">No Task To Show</p>
      }

      {addForm && <ADD_FORM taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} editData={editData} onAdd={addTask}/>}
    </div>
  );
}

export default App;
