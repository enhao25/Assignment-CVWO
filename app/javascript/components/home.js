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
            searchval : ""
        }
        this.onclickevent = this.onclickevent.bind(this);
    }

    onclickevent = (event) => {
        this.setState({ searchval: this.refs.searchText.value })
        console.log(this.searchval);
    }
    render(){
        return(
            <div className="row">
                <Sidebar />
                <Mainpage />
            </div>
        )
    }
}

export default Home