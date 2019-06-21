

import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
class PostInfo extends Component {
  render() {
    return (
      <Grid.Column width={6}>
        <Grid.Row className="test-Col" column={2} divided="vertically">
          <Grid.Column />
        </Grid.Row>
      </Grid.Column>
    )
  }
}

export default PostInfo; 
