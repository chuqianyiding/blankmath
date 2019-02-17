import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import SubstractionUpto20Page from "../../containers/SubstractionUpto20";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route path="/add_upto20" />
          <Route
            exact
            path="/subtract_upto20"
            component={SubstractionUpto20Page}
          />
        </Switch>
      </Container>
    );
  }
}

export default App;
