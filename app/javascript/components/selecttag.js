import React from 'react';
import TagItem from "./tagitem"
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const SelectTag = ({tags, selectTagOnClick}) => {

  const Tag_array = tags.map((tags, i) => {
      return( 
          <TagItem key={i} tagid={tags.id} name={tags.name} selectTagOnClick={selectTagOnClick}/>
      )
  })

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Select Tag</Popover.Title>
      <Popover.Content>
      <div id="checkboxes">
        <ul>
          <li onClick={()=> selectTagOnClick(null, "None")} style={{paddingLeft: "10px"}}> 
              None 
          </li>
          {Tag_array}
        </ul>
      </div>
      </Popover.Content>
    </Popover>
  );

  return(
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <img id="trigger" src={require('../../assets/images/black_tag.png')}/>
      </OverlayTrigger>
  )
}
export default SelectTag;