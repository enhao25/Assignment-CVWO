import React, { Component } from 'react'
import Sidebar from "../components/sidebar"
import Mainpage from "./mainpage"
import "../components/index.css"

class Home extends Component{
    constructor(){
        super()
        this.state ={
            tasks: [
                // {id: 1, description: 'Buy Food', active: true},
                // {id: 2, description: 'Pay Bills', active: false},
                // {id: 3, description: 'Meet George', active: true},
                // {id: 4, description: 'Buy eggs', active: true}
            ],
            searchval : "",
            input : ""
        }
    }

    fetchTask = () => {
        fetch('/tasks')
            .then(response => response.json())
            .then(tasks => this.setState({ tasks: tasks }))
    }

    componentDidMount(){
        this.fetchTask()
    }

    onsearchchange =(event) =>{
        this.setState({searchval: event.target.value})
    }

    render(){
        return(
            <div className="row">
                <Sidebar onsearchchange={this.onsearchchange} />
                <Mainpage tasks={this.state.tasks} searchval={this.state.searchval} fetchTask={this.fetchTask} />
            </div>
        )
    }
}

export default Home