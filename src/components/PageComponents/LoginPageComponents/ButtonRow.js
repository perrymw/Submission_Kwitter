import React, { Component } from "react";
import { Button, Modal, Header } from "semantic-ui-react";
import NewUserForm from "./NewUserForm"

class ButtonRow extends Component {
  state = { 
    modalOpen: false,
    isUserFormValid: false
  }

  setUserFormValidity = (Validity) =>{
    this.setState({ isUserFormValid:Validity })
  }
  
  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = (event) => {
    if(event){
      this.setState({ modalOpen: false })
    } 

    //This waits 
    setTimeout(
      ()=>{if(this.state.isUserFormValid) this.setState({ modalOpen: false })}, 
      300
    )
  }

  render() {
    return (
      <React.Fragment>
        <h2>Take part in the Chittering</h2>
        <div id='buttonRow'>
          {/* This button should probably be removed  */}
          <Modal
            open = {this.state.modalOpen}
            onClose = {this.handleClose}
            trigger={<Button type="submit" onClick={this.handleOpen} disabled={this.props.isLoading} id="createUser">Create Account</Button>}
            size='small'
          >
            <Header content="New User Form" />
            <Modal.Content onClick={(e) => { e.stopPropagation() }}>
              <NewUserForm onClose = {this.handleClose} setValidity={this.setUserFormValidity}/>
            </Modal.Content>
          </Modal>
        </div>
      </React.Fragment>
    )
  }
}

export default ButtonRow; 
