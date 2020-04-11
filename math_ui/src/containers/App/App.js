import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, withRouter } from "react-router-dom";
import { Container } from "reactstrap";
import HomePage from "../HomePage";
import GreatThanLessThanPage from "../GreaterThanLessThan";
import AddThreeNumbersPage from "../AddThreeNumbers";
import AddMinusThreeNumbersPage from "../AddMinusThreeNumbers";
import MultiplicationPage from "../Multiplication";
import MultiplicationMNPage from "../MultiplicationMissingNumber";
import AdditionPage from "../Addition";
import AdditionMNPage from "../AdditionMissingNumber";
import SubtractionPage from "../Subtraction";
import SubtractionMNPage from "../SubtractionMissingNumber";
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
          path="/greater_than_less_than"
          component={GreatThanLessThanPage}
        />
        <Route path="/add_three_numbers" component={AddThreeNumbersPage} />
        <Route
          path="/add_minus_three_numbers"
          component={AddMinusThreeNumbersPage}
        />
        <Route exact path="/multiplication" component={MultiplicationPage} />
        <Route
          exact
          path="/multiplicationmn"
          component={MultiplicationMNPage}
        />
        <Route exact path="/addition" component={AdditionPage} />
        <Route exact path="/additionmn" component={AdditionMNPage} />
        <Route exact path="/minus" component={SubtractionPage} />
        <Route exact path="/minusmn" component={SubtractionMNPage} />
      </Switch>
    </Container>
  );
};

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    back: PropTypes.func,
  }),
};

export default withRouter(App);
