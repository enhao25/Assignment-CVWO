import React, { Component } from 'react';
import Task from "./task";

class Mainpage extends Component{
    constructor(){
        super()
        this.onaddevent = this.onaddevent.bind(this);
    }

    onaddevent(event){
        // Database fields: taskid, description, active 
        console.log(this.refs.addText.value)
        this.refs.addText.value = "";
        console.log("Added")
    }

    render(){
        return(
            <div id="mainDiv" className="col-sm-9">
                <div id="myDIV" className="header">
                    <h2>My To Do List</h2>
                    <input type="text" id="myInput" placeholder="Add Task..." ref="addText"/>
                    <span onClick={this.onaddevent} className="addBtn">Add</span>
                </div>
                
                <ul id="myUL">
                    <li>
                        <Task taskid="task1" taskname="Buy Food"/>
                    </li>
                    <li className="checked">Pay bills</li>
                    <li>Meet George</li>
                    <li>Buy eggs</li>
                    <li>Read a book</li>
                    <li>Organize office</li>
                </ul>
            </div>
        )
    }
}
export default Mainpage