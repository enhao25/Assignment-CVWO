import React, { Component } from 'react'
import Sidebar from "../components/sidebar"
import Mainpage from "./mainpage"
import "../components/index.css"

class Home extends Component{
    constructor(){
        super()
        this.state ={
            task: [
                {id: 1, description: 'Buy Food', active: true},
                {id: 2, description: 'Pay Bills', active: false},
                {id: 3, description: 'Meet George', active: true},
                {id: 4, description: 'Buy eggs', active: true}
            ],
            searchval : "",
            input : ""
        }
    }

    onsearchchange =(event) =>{
        this.setState({searchval: event.target.value})
    }

    render(){
        return(
            <div className="row">
                <Sidebar onsearchchange={this.onsearchchange} />
                <Mainpage task_array={this.state.task} searchval={this.state.searchval} />
            </div>
        )
    }
}

export default Home