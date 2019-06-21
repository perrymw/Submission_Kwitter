

import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

class ProfileInfo extends Component {
  render() {
    return (
      <Grid.Column width={4}>
        <Grid.Row><h2>{this.props.user.displayname}</h2></Grid.Row>
        <Grid.Row><p>{this.props.user.username}</p></Grid.Row>
        <Grid.Row><p>{this.props.user.about}</p></Grid.Row>
        <Grid.Row><p>Chit digs: {this.props.message}</p></Grid.Row>
      </Grid.Column>
    )
  }
}

export default ProfileInfo; 
