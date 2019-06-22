import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import { LikeButton } from "."
import moment from 'moment'

class Chit extends Component {
  render() {
    return (
      <Grid.Row>
        <Grid className="chitPost-Container" columns={2} divided >
          <Grid.Column width={2} >
            <Grid.Row>
              <div id="userProfileDiv">
                <Image
                  class="userPostProfileImage"
                  src={this.props.pictureLocation}
                  alt=""
                />
              </div>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={7} >
            <Grid.Row>
              <p>{this.props.text}</p>
            </Grid.Row>
            <Grid.Row>
              {this.props.id} | {moment(this.props.time).fromNow()}
            </Grid.Row>
            <LikeButton message={this.props.self} render={this.props.reRenderMessages}/>
          </Grid.Column>
        </Grid>
      </Grid.Row>
    );
  }
}

export default Chit