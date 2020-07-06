import React from "react";
import { connect } from "react-redux";
import ProblemNumber from "../../components/ProblemNumber";
import {
  updateProblemNumber,
  updateNumberOfDigits,
} from "../../actions/addMinusThreeNumbersActions";
import { typedAction } from "../../actions/types";
import { ApplicationState } from "../../reducers";
import NumberOfDigits from "../../components/NumberOfDigits";
import Button from "@material-ui/core/Button";
import { generateThreeNumbers } from "../../utils/addMinusThreeNumbersGenerator";
import axios from "axios";
import config from "../../config.json";

interface AddMinusThreeNumbersPageProps {
  updateProblemNumber: (value: string) => typedAction;
  updateNumberOfDigits: (value: string) => typedAction;
  problemValue: string;
  digitValue: string;
}

const AddMinusThreeNumbersPage:React.FC<AddMinusThreeNumbersPageProps> = ({
  updateProblemNumber,
  updateNumberOfDigits,
  problemValue,
  digitValue
}:AddMinusThreeNumbersPageProps) => {
  const handleProblemNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateProblemNumber(event.target.value);
  };

  const handleDigitValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateNumberOfDigits(event.target.value);
  };

  const handleClickCreate = () => {
    const problems = generateThreeNumbers(
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickCreate}
        >
          Create
        </Button>
      </div>
    </>
  );
}
const mapStateToProps = (state:ApplicationState) => ({
  problemValue: state.addMinusThreeNumbersData.problemNumber,
  digitValue: state.addMinusThreeNumbersData.digitNumber,
});

const mapDispatchToProps = {
  updateProblemNumber,
  updateNumberOfDigits,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMinusThreeNumbersPage);
