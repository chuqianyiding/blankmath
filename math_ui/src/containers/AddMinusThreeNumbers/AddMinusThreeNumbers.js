import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProblemNumber from "../../components/ProblemNumber";
import {
  updateProblemNumber,
  updateNumberOfDigits
} from "../../actions/addMinusThreeNumbersActions";
import NumberOfDigits from "../../components/NumberOfDigits";
import Button from "@material-ui/core/Button";
import { generateThreeNumbers } from "../../utils/addMinusThreeNumbersGenerator";
import axios from "axios";
import config from "../../config.json";

class AddMinusThreeNumbersPage extends React.Component {
  handleProblemNumberChange = event => {
    this.props.updateProblemNumber(event.target.value);
  };

  handleDigitValueChange = event => {
    this.props.updateNumberOfDigits(event.target.value);
  };

  handleClickCreate = event => {
    const problems = generateThreeNumbers(
      this.props.digitValue,
      parseInt(this.props.problemValue, 10)
    );

    axios
      .post(config.PDFGeneratorEndpoint, {
        equations: problems,
        template: "3num"
      })
      .then(resp => {
        window.location.href = resp.data;
      });
  };

  render() {
    const { problemValue, digitValue } = this.props;
    return (
      <>
        <div className="mt-5">
          <ProblemNumber
            problemValue={problemValue}
            onProblemNumberChange={this.handleProblemNumberChange}
          />
        </div>

        <div className="mt-4">
          <NumberOfDigits
            digitValue={digitValue}
            onDigitChange={this.handleDigitValueChange}
          />
        </div>

        <div className="mt-4">
          {" "}
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClickCreate}
          >
            Create
          </Button>
        </div>
      </>
    );
  }
}

AddMinusThreeNumbersPage.propTypes = {
  problemValue: PropTypes.string,
  digitValue: PropTypes.string,
  updateProblemNumber: PropTypes.func,
  updateNumberOfDigits: PropTypes.func
};

const mapStateToProps = state => ({
  problemValue: state.addMinusThreeNumbersData.problemNumber,
  digitValue: state.addMinusThreeNumbersData.digitNumber
});

const mapDispatchToProps = {
  updateProblemNumber,
  updateNumberOfDigits
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMinusThreeNumbersPage);
