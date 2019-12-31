import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import TagList from "./taglist"

const inlineStyle = {
    modal : {
        marginTop: '12%',
        marginLeft: '10%',
        height: "280px"
    }
};

const UpdateModal = ({ taskid, taskname, update_task, tags, onUpdateClick, onModalOpen, onModalNameChange, onModalTagChange}) => {
  return(
    <Modal 
      trigger={<Button>Update</Button>} 
      style={inlineStyle.modal} 
      onOpen={()=>onModalOpen({taskname})}>
      <Modal.Header>Update Task</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <form className="ui form" onSubmit={e => e.preventDefault()}>
              <div className="field">
                  <label>Task</label>
                  <input className="max_width" id="ModalTask" placeholder="Task" value={update_task} onChange={onModalNameChange} />
              </div>
              <br />
              <div className="field">
                  <label>Tag</label>
                  <TagList tags={tags} onModalTagChange={onModalTagChange}/>
              </div>
              <br />
              <button className="ui button" onClick={()=>onUpdateClick(taskid)}>Update</button>
          </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default UpdateModal