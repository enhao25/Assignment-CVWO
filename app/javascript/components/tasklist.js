import React from 'react';
import Task from "./task";

const TaskList = ({tasks, tags, update_task, ondeleteclick, onUpdateClick, listOnClick, onModalOpen, onModalNameChange, onModalTagChange}) => {
    const Task_array = tasks.map((task, i) => {
        
        function tag_loop(){
            for(let index = 0; index < tags.length; index++){
                if(task.tags_id == tags[index].id){
                    return tags[index].name
                }
            }
        }
        
        const tag_value = task.tags_id ?  tag_loop() : null

        return( 
            <li key={i} onClick={()=>listOnClick(task.id)} >
                <Task 
                    taskid={task.id}  
                    taskname={task.description}
                    update_task={update_task}
                    tags={tags}
                    tag_value={tag_value} 
                    ondeleteclick={ondeleteclick}
                    onUpdateClick={onUpdateClick}
                    onModalOpen={onModalOpen}
                    onModalNameChange={onModalNameChange}
                    onModalTagChange={onModalTagChange}
                    />
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