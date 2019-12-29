import React from 'react';

const TagItem = ({tagid, name, selectTagOnClick}) => {
    return(
        <li onClick={()=> selectTagOnClick(tagid, name)} style={{paddingLeft: "10px"}}> 
            {name} 
        </li>
    )
}
export default TagItem;