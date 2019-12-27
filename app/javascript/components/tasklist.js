import React from 'react';
import Task from "./task";

const TaskList = ({tasks, ondeleteclick, onUpdateClick, listOnClick}) => {
    const Task_array = tasks.map((array_val, i) => {
        return( 
            <li key={i} onClick={()=>listOnClick(array_val.id)} >
                <Task 
                    taskid={array_val.id}  
                    taskname={array_val.description} 
                    ondeleteclick={ondeleteclick}
                    onUpdateClick={onUpdateClick}/>
            </li>
        )
    })
    return(
        <ul id="myUL">
            {Task_array}
        </ul>
            
    )
}
export default TaskList;