import React, { Component } from 'react';
import TaskList from "./tasklist";

class Mainpage extends Component{
    constructor(task_array){
        super(task_array)
        this.onaddevent = this.onaddevent.bind(this);
        this.state = { tasks: task_array, 
            new_task: {}
        }
    }

    onaddevent(event){
        // Database fields: taskid, description, active 
        // When we click on add task, the textbox will be set to ""
        const new_task = { description: this.refs.addText.value, active: true }

        // Action to add to database
        fetch('/tasks', {
            method: 'post',
            body: JSON.stringify(new_task),
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            if (response.status === 200){
                this.refs.addText.value = "";
                this.props.fetchTask()
                alert('Task created successfully');
            }
            else{
                alert("Error adding task to database")
            }
        });
    }

    ondeleteclick = (event) => {
        if(confirm("Are you sure you want to delete this task?")){
            console.log('delete button click')
            const targetid = event.target.id.substring(6)
            // Delete the task from database
            fetch('/tasks/' + targetid, {
                method: 'delete'
            }).then((response) => {
                if (response.status === 200){
                    this.props.fetchTask()
                    alert('Task successfully deleted');
                }
                else{
                    alert("Error deleting task")
                }
            });
        }
        else{}
    }

    onUpdateClick = (event) => {
        const n_des = prompt("What is the new description for the task?")
        if(n_des !== null && n_des != ""){
            const targetid = event.target.id.substring(6)
            const update_task = { description: n_des, active: true }
            // Update task from database
            fetch('/tasks/' + targetid, {
                method: 'put',
                body: JSON.stringify(update_task),
                headers: { 'Content-Type': 'application/json' }
            }).then((response) => {
                if (response.status === 200){
                    this.props.fetchTask()
                    alert('Task successfully updated');
                }
                else{
                    alert("Error updating task")
                }
            });
        }
    }

    onCompletedClick = () => {
        let checkedBoxes = document.querySelectorAll('input[name=task_cb]:checked');
        let completed_task = false;
        const cb_length = checkedBoxes.length;
        if (cb_length <= 0){
            alert("No items selected")
            return 
        }
        if(confirm("Are you sure you completed " + cb_length + " of the selected task?")){
            checkedBoxes.forEach(checkBox => {
                fetch('/tasks/' + checkBox.id, {
                    method: 'delete'
                }).then((response) => {
                    if (response.status === 200){
                        completed_task = true
                    }
                    else{
                        completed_task = false
                    }
                }).then(() => {
                    if (completed_task === true){
                        this.props.fetchTask()
                        alert("Task successfully completed")
                    }
                    else{
                        alert("Error updating task")
                    }
                });
            });
        }
    }

    // When the user click on the list, the checkbox will change status
    listOnClick = (id) => {
        // var cb_id = "#" + id;
        var input_cb = document.getElementById(id);
        if(input_cb.checked){
            input_cb.checked = false
        }
        else{
            input_cb.checked = true
        }
    }

    render(){
        const filtered_task = this.props.tasks.filter(task => {
            return task.description.toLocaleLowerCase().includes(this.props.searchval.toLocaleLowerCase())
        })
        return(
            <div id="mainDiv" className="col-sm-9 col-12">
                <div id="myDIV" className="header">
                <button id="complete_btn" onClick={this.onCompletedClick}>Completed</button>
                    <h2>My To Do List</h2>
                    <input type="text" id="myInput" placeholder="Add Task..." ref="addText"/>
                    <span onClick={this.onaddevent} className="addBtn">Add</span>
                </div>
                
                <TaskList 
                    tasks={filtered_task} 
                    ondeleteclick={this.ondeleteclick} 
                    onUpdateClick={this.onUpdateClick} 
                    listOnClick = {this.listOnClick}/>
                
            </div>
        )
    }
}
export default Mainpage