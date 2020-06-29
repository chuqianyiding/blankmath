import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProblemNumber from "../../components/ProblemNumber";
import {
  updateProblemNumber,
  updateNumberOfDigits,
  updateProblemDirection,
} from "../../actions/multiplicationActions";
import NumberOfDigits from "../../components/NumberOfDigits";
import Button from "@material-ui/core/Button";
import { generateMultiplication } from "../../utils/multiplicationGenerator";
import ProblemDirection from "../../components/ProblemDirection";
import axios from "axios";
import config from "../../config.json";

const MultiplicationPage = ({
  problemValue,
  problemDirection,
  digitValue,
  updateProblemNumber,
  updateProblemDirection,
  updateNumberOfDigits,
}) => {
  const handleProblemNumberChange = (event) => {
    updateProblemNumber(event.target.value);
  };

  const handleDigitValueChange = (event) => {
    updateNumberOfDigits(event.target.value);
  };

  const handleProblemDirectionChange = (event) => {
    updateProblemDirection(event.target.value);
  };

  const handleClickCreate = (event) => {
    const problems = generateMultiplication(
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
        <ProblemDirection
          problemDirection={problemDirection}
          onDirectionchange={handleProblemDirectionChange}
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

MultiplicationPage.propTypes = {
  problemValue: PropTypes.string,
  problemDirection: PropTypes.string,
  digitValue: PropTypes.string,
  updateProblemNumber: PropTypes.func,
  updateNumberOfDigits: PropTypes.func,
  updateProblemDirection: PropTypes.func,
};

const mapStateToProps = (state) => ({
  problemValue: state.multiplicationData.problemNumber,
  problemDirection: state.multiplicationData.problemDirection,
  digitValue: state.multiplicationData.digitNumber,
});

const mapDispatchToProps = {
  updateProblemNumber,
  updateNumberOfDigits,
  updateProblemDirection,
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiplicationPage);
