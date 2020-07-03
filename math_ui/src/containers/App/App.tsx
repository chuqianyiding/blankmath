import React from "react";
import { History } from "history";
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
import AddThreeMissingNumber from "../AddThreeMissingNumber";
import "./App.scss";

interface AppProps {
  history: History;
}

const App: React.FC<AppProps> = ({ history }: AppProps) => {
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
        <Route path="/add_three_numbers_mn" component={AddThreeMissingNumber} />
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

export default withRouter(App);
