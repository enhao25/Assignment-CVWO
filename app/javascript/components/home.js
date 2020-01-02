import React, { Component } from 'react'
import Sidebar from "./sidebar"
import Mainpage from "./mainpage"


class Home extends Component{
    constructor(){
        super()
        this.state ={
            tasks: [],
            tags: [],
            searchval : "",
            input : "",
            addtagval: "",
            filterval: ""
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

    onfilterchange = (event) => {
        this.setState({ filterval: event.target.value })
    }

    addTagOnClick = () => {
        if (this.state.addtagval){
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
        else{
            alert("Tag cannot be blank")
        }
        
    }

    deleteTagOnClick = () => {
        // Get id of selected filter
        const targetid = this.state.filterval
        // Delete action
        if(confirm("Delete this Tag?")){
            fetch('/tags/' + targetid, {
                method: 'delete'
            }).then((response) => {
                if (response.status === 200){
                    this.fetchTags()
                    this.setState({ filterval: "" })
                    alert('Tag successfully deleted');
                }
                else{
                    alert("Error deleting tag")
                }
            });
        }
    }

    render(){
        const { tasks, tags, searchval, filterval } = this.state;
        return(
            <div className="row">
                <Sidebar 
                    onsearchchange={this.onsearchchange} 
                    ontagchange={this.ontagchange} 
                    addTagOnClick={this.addTagOnClick}
                    onfilterchange={this.onfilterchange}
                    deleteTagOnClick={this.deleteTagOnClick}
                    filterval={this.state.filterval} 
                    tags={tags} />
                <Mainpage tasks={tasks} tags={tags} searchval={searchval} filterval={filterval} fetchTask={this.fetchTask} />
            </div>
        )
    }
}

export default Home