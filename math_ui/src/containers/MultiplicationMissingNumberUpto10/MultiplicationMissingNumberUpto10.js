import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProblemNumber from "../../components/ProblemNumber";
import { updateProblemNumber } from "../../actions/multiplicationMNUpto10Action";
import Button from "@material-ui/core/Button";
import { generateMultiplicationMN } from "../../utils/multiplicationMNGenerator";
import axios from "axios";
import config from "../../config.json";
import * as directions from "../../constants/directions";

function MultiplicationMNUpto10({ problemValue, updateProblemNumber }) {
  const handleProblemNumberChange = event => {
    updateProblemNumber(event.target.value);
  };

  const handleClickCreate = () => {
    const problems = generateMultiplicationMN(parseInt(problemValue, 10));

    axios
      .post(config.PDFGeneratorEndpoint, {
        equations: problems,
        template: directions.HORIZONTAL
      })
      .then(resp => {
        window.location.href = resp.data;
      });
  };
  return (
    <>
      <div className="mt-4">
        <h3> Multiplication -- Missing Number -- Numbers up to 10</h3>
      </div>

      <ProblemNumber
        problemValue={problemValue}
        onProblemNumberChange={handleProblemNumberChange}
      />
      <div className="mt-4">
        {" "}
        <Button variant="contained" color="primary" onClick={handleClickCreate}>
          Create
        </Button>
      </div>
    </>
  );
}

MultiplicationMNUpto10.propTypes = {
  problemValue: PropTypes.string,
  updateProblemNumber: PropTypes.func
};

const mapStateToProps = state => ({
  problemValue: state.multiplicationMNUpto10Data.problemNumber
});

const mapDispatchToProps = {
  updateProblemNumber
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiplicationMNUpto10);
