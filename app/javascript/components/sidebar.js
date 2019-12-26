import React, { Component } from 'react'
import "../components/sidebar.css"

const Sidebar = ({onsearchchange}) => {

    return(
        <div id="sidebarID" className="col-sm-3">
            <h4 id="welcometxt">Welcome</h4>
            <input type="text" id="searchbar" placeholder="Search Bar" onChange={onsearchchange}/>
            {/* <button type="button" className="btns">Search</button> */}

            <div className="partdiv">
                <h4 className="text-center">Filter</h4>
                <select>
                    <option value="t1">Test 1</option>
                    <option value="t2">Test 2</option>
                </select>
                <button type="button" className="btns">Add Tag</button>
            </div>
        </div>
    )
}
export default Sidebar