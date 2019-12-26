import React from 'react';

const Task = ({taskid, taskname, ondeleteclick}) => {
    return(
        <div className="custom-control custom-checkbox mr-sm-2">
            <input type="checkbox" className="custom-control-input" id={taskid}/>
            <label className="custom-control-label" htmlFor={taskid}>{taskname}</label>
            <div className="right_list">
                <button>Update</button>
                <input onClick={ondeleteclick} id={"delete" + taskid} className="delete_btn" type="image" alt="delete" src={require('../../assets/images/delete.png')} width="24" height="24" />
            </div>
        </div>
    )
}
export default Task;