import React from 'react';
import Tag from "./tag";

const TagList = ({tags}) => {
    const Tag_array = tags.map((tags, i) => {
        return( 
            <Tag key={i}
                tagid={tags.id}
                name={tags.name} />
        )
    })
    return(
        <select>
            <option value="none">None</option>
            {Tag_array}
        </select>
            
    )
}
export default TagList;