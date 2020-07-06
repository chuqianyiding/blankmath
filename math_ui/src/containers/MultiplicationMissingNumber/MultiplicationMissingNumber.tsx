import React from "react";
import { connect } from "react-redux";
import ProblemNumber from "../../components/ProblemNumber";
import {
  updateProblemNumber,
  updateNumberOfDigits,
} from "../../actions/multiplicationMNActions";
import { typedAction } from "../../actions/types";
import { ApplicationState } from "../../reducers";
import { Direction } from "../../constants/directions";
import NumberOfDigits from "../../components/NumberOfDigits";
import Button from "@material-ui/core/Button";
import { generateMultiplicationMN } from "../../utils/multiplicationMNGenerator";
import axios from "axios";
import config from "../../config.json";

interface MultiplicationMNPageProps {  
  problemValue: string;
  problemDirection: Direction;
  digitValue: string;
  updateProblemNumber: (value: string) => typedAction;
  updateNumberOfDigits: (value: string) => typedAction;
}

const MultiplicationMNPage: React.FC<MultiplicationMNPageProps> = ({
  problemValue,
  problemDirection,
  digitValue,
  updateProblemNumber,
  updateNumberOfDigits,
}:MultiplicationMNPageProps) => {
  const handleProblemNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateProblemNumber(event.target.value);
  };

  const handleDigitValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateNumberOfDigits(event.target.value);
  };

  const handleClickCreate = () => {
    const problems = generateMultiplicationMN(
      digitValue,
      parseInt(problemValue, 10)
    );

    axios
      .post(config.PDFGeneratorEndpoint, {
        equations: problems,
        template: problemDirection,
      })
      .then((resp) => {
        window.open(resp.data);
      });
  };

  return (
    <>
      <div className="mt-5">
        <ProblemNumber
          problemValue={problemValue}
          onProblemNumberChange={handleProblemNumberChange}
        />
      </div>

      <div className="mt-4">
        <NumberOfDigits
          digitValue={digitValue}
          onDigitChange={handleDigitValueChange}
        />
      </div>

      <div className="mt-4">
        {" "}
        <Button variant="contained" color="primary" onClick={handleClickCreate}>
          Create
        </Button>
      </div>
    </>
  );
};

const mapStateToProps = (state:ApplicationState) => ({
  problemValue: state.multiplicationMNData.problemNumber,
  problemDirection: state.multiplicationMNData.problemDirection!,
  digitValue: state.multiplicationMNData.digitNumber,
});

const mapDispatchToProps = {
  updateProblemNumber,
  updateNumberOfDigits,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiplicationMNPage);
