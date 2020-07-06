import React from "react";
import { connect } from "react-redux";
import ProblemNumber from "../../components/ProblemNumber";
import {
  updateProblemNumber,
  updateNumberOfDigits,
} from "../../actions/addThreeNumbersMNActions";
import { typedAction } from "../../actions/types";
import { ApplicationState } from "../../reducers";
import NumberOfDigits from "../../components/NumberOfDigits";
import Button from "@material-ui/core/Button";
import { generateThreeMissingNumbers } from "../../utils/addThreeNumbersMNGenerator";
import axios from "axios";
import config from "../../config.json";

interface AddThreeMissingNumberProps {
  updateProblemNumber: (value: string) => typedAction;
  updateNumberOfDigits: (value: string) => typedAction;
  problemValue: string;
  digitValue: string;
}

const AddThreeMissingNumber:React.FC<AddThreeMissingNumberProps> = ({
  problemValue,
  digitValue,
  updateProblemNumber,
  updateNumberOfDigits,
}:AddThreeMissingNumberProps) => {
  const handleProblemNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateProblemNumber(event.target.value);
  };

  const handleDigitValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateNumberOfDigits(event.target.value);
  };

  const handleClickCreate = () => {
    const problems = generateThreeMissingNumbers(
      digitValue,
      parseInt(problemValue, 10)
    );

    axios
      .post(config.PDFGeneratorEndpoint, {
        equations: problems,
        template: "3num",
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
  problemValue: state.addThreeNumbersMNData.problemNumber,
  digitValue: state.addThreeNumbersMNData.digitNumber,
});

const mapDispatchToProps = {
  updateProblemNumber,
  updateNumberOfDigits,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddThreeMissingNumber);
