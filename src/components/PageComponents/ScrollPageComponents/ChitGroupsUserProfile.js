import React, { Component } from "react";
import { connect } from "react-redux";
import Chit from "./Chit";
import { getMessagesAction } from "../../../actions/messages";

//good luck implementing this
class ChitGroupsUserProfile extends Component {
  componentDidMount() {
    this.props.getMessagesAction({id: this.props.userid});
  }

  render() {
    return (
      <React.Fragment>
        {this.props.chits.filter(message => message.userId === this.props.userid).map(chit => (
          <Chit 
            key={chit.id} 
            text={chit.text} 
            time={chit.createdAt} 
            user={chit.username}
            self={chit} 
            reRenderMessages={()=> this.props.getMessagesAction({id: this.props.userid})}
          />
        ))
        }
      </React.Fragment>
    );
  }
}

export default connect(
  ({ messages, auth }) => {
    return {
      chits: (messages.message && messages.message.messages) || [],
      userid: auth.login.id
    };
  },
  { getMessagesAction }
)(ChitGroupsUserProfile);