import React from 'react'
import { useState, useEffect } from 'react';

const ADD_FORM = (props) => {
    const [text, setText]= useState('');
    const [day, setDay]= useState('');
    const [reminder, setReminder]= useState(false);

    const onSubmit= (e)=>{
        e.preventDefault()

        const temp_task={
            text: text,
            day:day,
            reminder: reminder,
        }
        props.onAdd(temp_task);

        setText('');
        setDay('');
        setReminder(false);
        props.setTaskToEdit({
            "text": "",
            "day": "",
            "reminder": false,
            "id": 0
        });
    }
    useEffect(()=>{
        // console.log(props.editData,props.taskToEdit);
        if(props.editData){
            setText(props.taskToEdit["text"]);
            setDay(props.taskToEdit["day"]);
            setReminder(props.taskToEdit["reminder"]);
        }
    },[props.editData, props.taskToEdit])

    return (
        <form id="Add-Form" className="task-form" onSubmit={onSubmit}>
            <h1>Add Task</h1>
            <div className="form-controller">
                <label>Task</label>
                <input 
                    type="text" 
                    name="" 
                    placeholder="Add Task" 
                    value={text}
                    required= {true}
                    onChange={(e)=> setText(e.target.value)}    
                />

                <label>Date</label>
                <input 
                    type="date" 
                    name="" 
                    placeholder="Add Date"
                    value={day}
                    required={true}
                    onChange={(e)=> setDay(e.target.value)} 
                />

                <div className="checkbox">
                    <label>Set Reminder</label>
                    <input 
                        type="checkbox" 
                        name=""
                        checked={reminder}
                        value={reminder}
                        onChange={(e)=> setReminder(e.currentTarget.checked)}
                    />
                </div>
            </div>
            <input type="submit" className="btn"/>
        </form>
    )
}

export default ADD_FORM
