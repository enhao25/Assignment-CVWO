import React, { Component } from 'react';
import TaskList from "./tasklist";

class Mainpage extends Component{
    constructor(task_array){
        super(task_array)
        this.onaddevent = this.onaddevent.bind(this);
        this.state = { tasks: task_array }
    }

    onaddevent(event){
        // Database fields: taskid, description, active 
        // When we click on add task, the textbox will be set to ""
        this.refs.addText.value = "";
        // Action to add to database
        console.log(this.state.tasks)
    }

    ondeleteclick = (event) => {
        if(confirm("Are you sure you want to delete this task?")){
            console.log('delete button click')
            const targetid = event.target.id.substring(6)
            // Delete the task from database
            console.log(targetid)
        }
        else{}
        
    }

    render(){
        console.log(this.state.tasks)
        const filtered_task = this.state.tasks['task_array'].filter(task => {
            return task.description.toLocaleLowerCase().includes(this.props.searchval.toLocaleLowerCase())
        })
        return(
            <div id="mainDiv" className="col-sm-9">
                <div id="myDIV" className="header">
                    <h2>My To Do List</h2>
                    <input type="text" id="myInput" placeholder="Add Task..." ref="addText"/>
                    <span onClick={this.onaddevent} className="addBtn">Add</span>
                </div>
                
                <TaskList tasks={filtered_task} ondeleteclick={this.ondeleteclick} searchval={this.props.searchval} />
                
            </div>
        )
    }
}
export default Mainpage