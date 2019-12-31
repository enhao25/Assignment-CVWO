import React from 'react';
import Tag from "./tag";

const TagList = ({ onfilterchange, tags, onModalTagChange }) => {
    const Tag_array = tags.map((tags, i) => {
        return( 
            <Tag key={i}
                tagid={tags.id}
                name={tags.name} />
        )
    })
    return(
        <select onChange={onfilterchange || onModalTagChange}>
            <option value="">None</option>
            {Tag_array}
        </select>
            
    )
}
export default TagList;