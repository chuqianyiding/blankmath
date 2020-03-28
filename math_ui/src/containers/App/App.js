import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, withRouter } from "react-router-dom";
import { Container } from "reactstrap";
import SubtractionUpto20Page from "../SubtractionUpto20";
import SubtractionMNUpto20 from "../SubtractionMissingNumberUpto20";
import AdditionMNUpto20 from "../AdditionMissingNumberUpto20";
import HomePage from "../HomePage";
import GreatThanLessThanPage from "../GreaterThanLessThan";
import SubtractionUpto40Page from "../SubtractionUpto40";
import AddThreeNumbersPage from "../AddThreeNumbers";
import MultiplicationMNUpto10 from "../MultiplicationMissingNumberUpto10";
import AdditionPage from "../Addition";
import AdditionMNpage from "../AdditionMissingNumber";
import Header from "../../components/Header";
import "./App.scss";

const App = ({ history }) => {
  const handleClickLogo = () => {
    history.push("/");
  };

  return (
    <Container>
      <Header onClickLogo={handleClickLogo} />
      <Switch>
        <Route exact path="/" component={HomePage} />
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
        <Route path="/subtract_upto40" component={SubtractionUpto40Page} />
        <Route path="/add_three_numbers" component={AddThreeNumbersPage} />
        <Route
          exact
          path="/multiply_mn_upto10"
          component={MultiplicationMNUpto10}
        />
        <Route exact path="/addition" component={AdditionPage} />
        <Route exact path="/additionmn" component={AdditionMNpage} />
      </Switch>
    </Container>
  );
};

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    back: PropTypes.func
  })
};

export default withRouter(App);
