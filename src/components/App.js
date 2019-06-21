import React, { Component } from "react"
import { Switch, Route } from "react-router-dom";
import { LoginPage, UserProfile, NewsFeedPage } from "./Pages";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginPage />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
        <Route exact path="/newsfeed" render={() => <NewsFeedPage />} />
      </Switch>
    );
  }
}

export default App;
