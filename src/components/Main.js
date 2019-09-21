import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "../styles/Fonts.css";
import Dashboard from "./Dashboard";
import Settings from "./Settings";

class Main extends Component {
  constructor(props) {
    super(props);

    this.getUserChoice = this.getUserChoice.bind(this);

    this.state = {
      userChoice: "0"
    };
  }

  getUserChoice(userChoice) {
    this.setState({ userChoice: userChoice });
  }

  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Dashboard {...props} chartType={this.state.userChoice} />
            )}
          />
          <Route
            exact
            path="/settings"
            render={props => (
              <Settings
                {...props}
                chartType={this.state.userChoice}
                updateSettings={this.getUserChoice}
              />
            )}
          />
        </Switch>
      </main>
    );
  }
}

export default Main;
