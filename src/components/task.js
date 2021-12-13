import React from 'react'
// import {FaTimes} from 'react-icons/fa'

const Task = (props) => {
    const edit_task = function(task_id){
        props.setAddForm(true);
        props.setEditData(true);
        props.Edit_func(task_id);

    }
    return (
        <li className= {`task${props.task.reminder ?'-rem':''}`} 
            onDoubleClick={()=>props.toggleRem(props.task.id)} 
        >
            <div>
                <h3>{props.task.text}</h3>
                <p>{props.task.day}</p>
            </div>

            <div>
                <i className="fas fa-minus-circle del" onClick={()=>props.onDelete(props.task.id)}></i>
                <i className="fas fa-edit del" onClick={()=>edit_task(props.task.id)}></i>
            </div>
        </li>
    )
}

export default Task
