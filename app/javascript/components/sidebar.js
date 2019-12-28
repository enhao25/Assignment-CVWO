import React from 'react'
import "../components/sidebar.css"
import TagList from "./taglist"

const Sidebar = ({onsearchchange, ontagchange, addTagOnClick, tags}) => {
    
    return(
        <div id="sidebarID" className="col-sm-3 col-12">
            <h4 id="welcometxt">Welcome</h4>
            <input type="text" id="searchbar" placeholder="Search Bar" onChange={onsearchchange}/>
            <div className="partdiv">
                <h4 className="text-center">Filter</h4>
                <TagList tags={tags}/>
            </div>
            <div className="partdiv">
                <h4 className="text-center">Add Tag</h4>
                <input name="add_tag" placeholder="Add New Tag" onChange={ontagchange} style={{width: "100%"}}/>
                <button type="button" className="btns" onClick={addTagOnClick}>Add Tag</button>
            </div>
        </div>
    )
}
export default Sidebar