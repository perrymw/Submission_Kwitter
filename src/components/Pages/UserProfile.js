import { ProfileInfo, ProfilePic, PostInfo, NavBar, ChitGroupsUserProfile } from "../PageComponents/ScrollPageComponents"
import defaultSquirrel from "../../pictures/profileSquirrel.jpeg";
import settings from "../../pictures/settingsAcorn.png";
import { Grid } from "semantic-ui-react";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUserAction as getUser,
  getMessagesAction as getMessages
} from "../../actions";
// import Spinner from "react-spinkit";

class UserProfile extends Component {
  state = {};
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    if(!this.state.users){this.setState({users:this.props.getUser({ userId: this.props.id }).users})}
  }

  render() {
    const { user, isLoading } = this.props;
    return (
      <React.Fragment>
        <NavBar />
        <ProfilePic isLoading={isLoading} defaultSquirrel={defaultSquirrel} settings={settings}/>
        <Grid columns={2} id="profileinfo2" divided>
        <Grid.Column width={1}>
          <ProfileInfo user={user} message={this.props.message} />
        </Grid.Column>
          <Grid.Column width={8} style = {{border: '1px solid black'}}>
          <ChitGroupsUserProfile />
          </Grid.Column>
          <PostInfo />
        </Grid>
      </React.Fragment>
    );
  }
}


export default connect(
  ({ auth, users, messages }) => ({
    isLoading: users.usersLoading,
    user: (users.users && users.users.user) || {
      displayname: "",
      username: "",
      about: ""
    },
    id: (auth.login && auth.login.id) || 5,
    messages: (messages.message && messages.message.messages) || []
  }),
  { getUser, getMessages }
)(UserProfile);
