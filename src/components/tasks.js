import Task from './task.js'
const Tasks = (props) => {
    
    return (
        <ul className="task-list">
           {
               props.tasks.map((task, index)=>(
                   <Task 
                    key={index}
                    addForm={props.addForm} setAddForm={props.setAddForm}
                    setEditData={props.setEditData} Edit_func={props.Edit_func}
                    task={task} 
                    toggleRem={props.toggleRem}
                    onDelete={props.onDelete}/>
               ))
           } 
        </ul>
    )
}

export default Tasks;