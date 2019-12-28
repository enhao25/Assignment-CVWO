import React, { Component } from 'react'
import Sidebar from "../components/sidebar"
import Mainpage from "./mainpage"
import "../components/index.css"

class Home extends Component{
    constructor(){
        super()
        this.state ={
            tasks: [],
            tags: [],
            searchval : "",
            input : "",
            addtagval: ""
        }
    }

    fetchTask = () => {
        fetch('/tasks')
            .then(response => response.json())
            .then(tasks => this.setState({ tasks: tasks }))
    }

    fetchTags = () => {
        fetch('/tags')
            .then(response => response.json())
            .then(tags => this.setState({ tags: tags }))
    }

    componentDidMount(){
        this.fetchTask()
        this.fetchTags()
    }

    onsearchchange =(event) =>{
        this.setState({searchval: event.target.value})
    }

    ontagchange = (event) =>{
        this.setState({addtagval: event.target.value})
    }

    addTagOnClick = () => {
        if(confirm("Add this to the list of tags?")){
            
            const new_tag = { name: this.state.addtagval }
            
            // Add tag to database
            fetch('/tags', {
                method: 'post',
                body: JSON.stringify(new_tag),
                headers: { 'Content-Type': 'application/json' }
            }).then((response) => {
                if (response.status === 200){
                    this.fetchTags()
                    alert('Tag successfuly added');
                }
                else{
                    alert("Error adding tag")
                }
            });
        }
    }

    render(){
        const { tasks, tags, searchval } = this.state;
        return(
            <div className="row">
                <Sidebar 
                    onsearchchange={this.onsearchchange} 
                    ontagchange={this.ontagchange} 
                    addTagOnClick={this.addTagOnClick} 
                    tags={tags} />
                <Mainpage tasks={tasks} tags={tags} searchval={searchval} fetchTask={this.fetchTask} />
            </div>
        )
    }
}

export default Home