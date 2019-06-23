import React, { Component } from "react";
import { Modal, Header, Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux"
import { updateUserPhotoAction as updateUserPhoto } from "../../../actions"

class ProfilePic extends Component {
  
  formSubmit = event =>{
    event.preventDefault()
    console.log(event.target)
    const form = new FormData(event.target)
    console.log(form)
    for(let each of form.entries()){
      console.log(each)
    }
    this.props.updateUserPhoto({form:form, userId: this.props.id, token: this.props.token})
  }

  render() {
    return (
      <Modal
      trigger={<div id="settings">
        <Button id="temp" type="submit" disabled={this.props.isLoading}>
          <img src={this.props.acorn} alt="new" />
        </Button>
      </div>}
      size='small'
    >
      <Header content="Change your picture" />
      <Modal.Content>
        <Form onSubmit={this.formSubmit}>
            <Input type="file" name="picture"></Input>
            <br/>
            <p>File must be under 200 KB</p>
            <Button type="submit">uploadPhoto</Button>
        </Form>
      </Modal.Content>
    </Modal>
    )
  }
}

export default connect(({state})=>{

},
  { updateUserPhoto }
  )(ProfilePic)