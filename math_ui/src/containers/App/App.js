import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import SubtractionUpto20Page from "../../containers/SubtractionUpto20";
import SubtractionMNUpto20 from "../../containers/SubtractionMissingNumberUpto20";
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
            component={SubtractionUpto20Page}
          />
          <Route
            exact
            path="/subtract_mn_upto20"
            component={SubtractionMNUpto20}
          />
        </Switch>
      </Container>
    );
  }
}

export default App;
