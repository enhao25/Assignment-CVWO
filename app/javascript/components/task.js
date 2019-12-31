import React from 'react';
import UpdateModal from "./modal"

const Task = ({taskid, taskname, update_task, tags, tag_value, ondeleteclick, onUpdateClick, onModalOpen, onModalNameChange, onModalTagChange}) => {

    return(
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id={taskid} name="task_cb"/>
            <label className="custom-control-label" htmlFor={taskid} >
                {taskname}
            </label>
            <label style={{fontSize: "14px", marginLeft: "5px"}}>
                {tag_value != null ? "(Tag: " + tag_value + ")" : ""}
            </label>
            <div className="right_list">
                <UpdateModal 
                    taskid={taskid} 
                    taskname={taskname} 
                    update_task={update_task}
                    tags={tags} 
                    onUpdateClick={onUpdateClick} 
                    onModalOpen={onModalOpen} 
                    onModalNameChange={onModalNameChange}
                    onModalTagChange={onModalTagChange}/>
                {/* <button className="ui icon button" id={"update" + taskid} onClick={onUpdateClick}>Update</button> */}
                <input onClick={ondeleteclick} id={"delete" + taskid} className="delete_btn" type="image" alt="delete" src={require('../../assets/images/delete.png')} width="24" height="24" />
            </div>
        </div>
    )
}
export default Task;