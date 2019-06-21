
import React, { Component } from "react";

class Err extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Oh no, you appear to have taken a wrong turn</p>
        <p>Why don't you click this button at the bottom to return to
          the login page.
        </p>
        <button onClick="location.href='/">Return To Login</button>
      </React.Fragment>
    )
  }
}

export default Err