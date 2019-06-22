import React, { Component } from "react";
import { connect } from "react-redux";
import Chit from "./Chit";
import { getMessagesAction } from "../../../actions/messages";
import { getUsersAction } from "../../../actions/users";

//good luck implementing this
class ChitGroups extends Component {
  componentDidMount() {
    this.props.getUsersAction();
    this.props.getMessagesAction();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.chits.map(chit => (
              <Chit key={chit.id} id={chit.userId} text={chit.text} time={chit.createdAt} self={chit} reRenderMessages={this.props.getMessagesAction} />))}
      </React.Fragment>
    );
  }
}

export default connect(
  ({ messages, users }) => {
    return {
      chits: messages.message && messages.message.messages || [],
      users: users.userId,
    };
  },
  { getMessagesAction, getUsersAction }
)(ChitGroups);