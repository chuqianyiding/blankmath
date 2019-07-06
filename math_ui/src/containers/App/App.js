import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import SubtractionUpto20Page from "../../containers/SubtractionUpto20";
import SubtractionMNUpto20 from "../../containers/SubtractionMissingNumberUpto20";
import AdditionMNUpto20 from "../../containers/AdditionMissingNumberUpto20";
import HomePage from "../HomePage";
import AdditionUpto20Page from "../../containers/AdditionUpto20";
import GreatThanLessThanPage from "../../containers/GreaterThanLessThan";
import AdditionUpto40Page from "../../containers/AdditionUpto40";
import SubtractionUpto40Page from "../../containers/SubtractionUpto40";
import AddThreeNumbersPage from "../../containers/AddThreeNumbers";
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
          <Route path="/add_upto40" component={AdditionUpto40Page} />
          <Route path="/subtract_upto40" component={SubtractionUpto40Page} />
          <Route path="/add_three_numbers" component={AddThreeNumbersPage} />
        </Switch>
      </Container>
    );
  }
}

export default App;
