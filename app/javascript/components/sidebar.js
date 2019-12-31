import React from 'react'
import "../components/sidebar.css"
import TagList from "./taglist"

const Sidebar = ({onsearchchange, ontagchange, addTagOnClick, onfilterchange, deleteTagOnClick, filterval, tags}) => {
    
    return(
        <div id="sidebarID" className="col-sm-3 col-12">
            <h3 id="welcometxt">Welcome</h3>
            <div className="ui input max_width">
                <input type="text" id="searchbar" placeholder="Search..." onChange={onsearchchange} />
            </div>
            <div className="partdiv">
                <h3 className="text-center">Filter</h3>
                <TagList onfilterchange={onfilterchange} tags={tags}/>
                <button className="ui button max_width" onClick={deleteTagOnClick} disabled={!filterval}>Delete Tag</button>
            </div>
            <div className="partdiv">
                <h3 className="text-center">Add Tag</h3>
                <input name="add_tag" className="max_width" placeholder="Add New Tag" onChange={ontagchange}/>
                <button className="ui button max_width" onClick={addTagOnClick}>Add Tag</button>
            </div>
        </div>
    )
}
export default Sidebar