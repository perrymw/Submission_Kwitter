import { Grid } from "semantic-ui-react";
import squirrel from "../../pictures/Squirrel.png";
import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "react-spinkit";
import { LoginForm } from "../PageComponents/LoginPageComponents"
import ButtonRow from "../PageComponents/LoginPageComponents/ButtonRow"


class LoginPage extends Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
          <Grid columns={2} relaxed='very' doubling padded>
            <Grid.Column>
              <LoginForm isLoading={isLoading}/>
              <ButtonRow />
            </Grid.Column>
            <Grid.Column>
              <h1>Secret Squirrel, Inc.</h1>
              <img src={squirrel} alt="new" />
            </Grid.Column>
          </Grid>
        {isLoading && <Spinner name="circle" color="blue" />}
        {err && <p style={{ color: "red" }}>{err}</p>}
        <div id="loginBackground" />
      </React.Fragment>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }),
  null
)(LoginPage);