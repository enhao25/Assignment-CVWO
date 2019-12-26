import React from 'react';
import Task from "./task";

const TaskList = ({tasks, ondeleteclick, searchval}) => {
    const Task_array = tasks.map((array_val, i) => {
        return( 
            <li key={i}>
                <Task taskid={array_val.id}  taskname={array_val.description} ondeleteclick={ondeleteclick}/>
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