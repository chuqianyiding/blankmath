import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProblemNumber from "../../components/ProblemNumber";
import {
  updateProblemNumber,
  updateNumberOfDigits,
} from "../../actions/addThreeNumbersMNActions";
import NumberOfDigits from "../../components/NumberOfDigits";
import Button from "@material-ui/core/Button";
import { generateThreeMissingNumbers } from "../../utils/addThreeNumbersMNGenerator";
import axios from "axios";
import config from "../../config.json";

const AddThreeMissingNumber = ({
  problemValue,
  digitValue,
  updateProblemNumber,
  updateNumberOfDigits,
}) => {
  const handleProblemNumberChange = (event) => {
    updateProblemNumber(event.target.value);
  };

  const handleDigitValueChange = (event) => {
    updateNumberOfDigits(event.target.value);
  };

  const handleClickCreate = (event) => {
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

AddThreeMissingNumber.propTypes = {
  problemValue: PropTypes.string,
  digitValue: PropTypes.string,
  updateProblemNumber: PropTypes.func,
  updateNumberOfDigits: PropTypes.func,
};

const mapStateToProps = (state) => ({
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
