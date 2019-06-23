import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import SubtractionUpto20Page from "../../containers/SubtractionUpto20";
import SubtractionMNUpto20 from "../../containers/SubtractionMissingNumberUpto20";
import AdditionMNUpto20 from "../../containers/AdditionMissingNumberUpto20";
import HomePage from "../HomePage";
import AdditionUpto20Page from "../../containers/AdditionUpto20";
import GreatThanLessThanPage from "../../containers/GreaterThanLessThan";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/add_upto20" component={AdditionUpto20Page} />
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
          <Route exact path="/add_mn_upto20" component={AdditionMNUpto20} />
          <Route
            exact
            path="/greater_than_less_than"
            component={GreatThanLessThanPage}
          />
        </Switch>
      </Container>
    );
  }
}

export default App;
