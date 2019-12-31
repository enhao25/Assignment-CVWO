import React, { Component } from 'react';
import TaskList from "./tasklist";
import SelectTag from "./selecttag";


class Mainpage extends Component{
    constructor(task_array){
        super(task_array)
        this.onaddevent = this.onaddevent.bind(this);
        this.state = { 
            tasks: task_array, 
            new_task: {},
            tag_val: "None",
            tag_id: null,
            update_task: "",
            update_tag: ""
        }
    }

    onaddevent(event){
        // Database fields: taskid, description, active 
        // When we click on add task, the textbox will be set to ""
        const new_task = { description: this.refs.addText.value, active: true, tags_id: this.state.tag_id }
        // Action to add to database
        console.log(new_task)
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

    onUpdateClick = (taskid) => {
        const { update_task, update_tag } = this.state
        const update_confirm = confirm("Are you sure you want to update the task?")

        if(update_task !== null && update_task != "" && update_confirm){
            const up_task = { description: update_task, active: true, tags_id: update_tag }
            // Update task from database
            fetch('/tasks/' + taskid, {
                method: 'put',
                body: JSON.stringify(up_task),
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
    // When update modal opens
    onModalOpen = (taskname) => {
        this.setState({update_task: taskname.taskname})
    }

    // When update description changes
    onModalNameChange = (event) => {
        this.setState({update_task: event.target.value})
    }

    // When update tag changes
    onModalTagChange = (event) => {
        this.setState({update_tag: event.target.value})
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
        var input_cb = document.getElementById(id);
        if(input_cb.checked){
            input_cb.checked = false
        }
        else{
            input_cb.checked = true
        }
    }

    // When the user select the tag on the list before adding task
    selectTagOnClick = (id, name) => {
        this.setState({ tag_val: name, tag_id: id })
    }

    render(){
        // Inside filter, return turn or false
        const search_filtered_task = this.props.tasks.filter(task => {
            return task.description.toLocaleLowerCase().includes(this.props.searchval.toLocaleLowerCase())
        })
        const tag_filtered_task = search_filtered_task.filter(task => {
            return !this.props.filterval 
                ? true 
                : this.props.filterval == task.tags_id
        })
        return(
            <div id="mainDiv" className="col-sm-9 col-12">
                <div id="myDIV" className="header">
                <button id="complete_btn" className="ui blue basic button" onClick={this.onCompletedClick}>Completed</button>
                    <h2>My To Do List</h2>
                    <div className="combo">
                        <input type="text" id="myInput" placeholder="Add Task..." ref="addText"/>
                        <SelectTag tags={this.props.tags} selectTagOnClick={this.selectTagOnClick} />
                        <label id="trigger_label">{this.state.tag_val}</label>
                    </div>
                    <span onClick={this.onaddevent} className="addBtn">Add</span>
                </div>
                
                <TaskList 
                    tasks={tag_filtered_task}
                    tags={this.props.tags} 
                    update_task={this.state.update_task}
                    ondeleteclick={this.ondeleteclick} 
                    onUpdateClick={this.onUpdateClick} 
                    listOnClick = {this.listOnClick}
                    onModalOpen={this.onModalOpen}
                    onModalNameChange={this.onModalNameChange}
                    onModalTagChange={this.onModalTagChange}/>
                
            </div>
        )
    }
}
export default Mainpage