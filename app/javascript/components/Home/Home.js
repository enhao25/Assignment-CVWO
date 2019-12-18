import React, { Component } from 'react'

class Home extends Component{
    constructor(){
        super()
        this.state ={
            modules: [
                {id: 1, title: 'Task 1', description: 'Test 1', active: false},
                {id: 2, title: 'Task 2', description: 'Test 2', active: false},
                {id: 3, title: 'Task 3', description: 'Test 3', active: false},
                {id: 4, title: 'Task 4', description: 'Test 4', active: false}
            ],
            searchval : ""
        }
        this.onclickevent = this.onclickevent.bind(this);
    }

    onclickevent = (event) => {
        this.setState({ searchval: this.refs.searchText.value })
    }
    render(){
        return(
            <div>
                <div id="myDIV" className="header">
                    <h2>My To Do List</h2>
                    <input type="text" id="myInput" placeholder="Title..." ref="searchText"/>
                    <span onClick={this.onclickevent} className="addBtn">Add</span>
                </div>
                
                <ul id="myUL">
                    <li>Hit the gym</li>
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

export default Home