import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { createUserAction as createUser } from "../../../actions"
import { connect } from "react-redux";

class NewUserForm extends Component {
    state = {
        username: "",
        displayName: "",
        password: "",
    };

    handleChange = (e) => { 
      this.setState( {[e.target.name]: e.target.value } ) 
    }

    handleSubmit = e => {
      let promise = this.props.createUser(this.state)
      const target = e.target
      e.preventDefault()
      this.props.onClose()
      promise
      .then(this.props.setValidity(true))
      .catch(er=>{
        this.props.setValidity(false)
        document.getElementById("username").setCustomValidity("Username already Taken")
        target.reportValidity()
        setTimeout(() => {
          document.getElementById("username").setCustomValidity("")
        }, 1000);
      })
    }

    verifyPassword(input){
      return (input.target.value !== document.getElementById("password").value) ?  input.target.setCustomValidity('Password Must be Matching.') : input.target.setCustomValidity('');
    }

    render() {
        return (
        <div className="newUserForm-Container">
          <Form onSubmit={this.handleSubmit}>
              <h1>We are happy to add you as a secret squirrel!</h1>
            <Form.Group>
              <Form.Input placeholder='username' name='username' type="text" onChange={this.handleChange} id="username" required />
            </Form.Group>
            <Form.Input placeholder='Display Name' name='displayName'  type="text" onChange={this.handleChange} required />
            <Form.Input placeholder='Enter new password' name='password' type="password" onChange={this.handleChange} id="password" autocomplete="new-password" required />              
            <Form.Input placeholder='Confirm Password' name='passwordCheck' type="password" onInput={this.verifyPassword} id="passwordCheck" autocomplete="new-password" required />
            <hr/>
            <Form.Button content='Submit' />
          </Form>
        </div>
        )
      }

}

export default connect(
  ({ users }) => ({
    isLoading: users.usersLoading,
    err: users.usersError
  }),
  { createUser }
)(NewUserForm);
