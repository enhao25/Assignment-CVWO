import React from 'react';

const Tag = ({ tagid, name }) => {
    return(
        <option value={tagid}>
            {name}
        </option>
    )
}
export default Tag;