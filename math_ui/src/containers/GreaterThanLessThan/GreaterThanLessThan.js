import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProblemNumber from "../../components/ProblemNumber";
import {
  updateProblemNumber,
  updateNumberOfDigits,
} from "../../actions/greaterThanLessThanActions";
import NumberOfDigits from "../../components/NumberOfDigits";
import Button from "@material-ui/core/Button";
import { generateData } from "../../utils/greaterThanLessThanGenerator";
import axios from "axios";
import config from "../../config.json";

class GreatThanLessThanPage extends React.Component {
  handleProblemNumberChange = (event) => {
    this.props.updateProblemNumber(event.target.value);
  };

  handleDigitValueChange = (event) => {
    this.props.updateNumberOfDigits(event.target.value);
  };

  handleClickCreate = (event) => {
    const problems = generateData(
      this.props.digitValue,
      parseInt(this.props.problemValue, 10)
    );

    axios
      .post(config.PDFGeneratorEndpoint, {
        equations: problems,
      })
      .then((resp) => {
        window.open(resp.data);
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

GreatThanLessThanPage.propTypes = {
  problemValue: PropTypes.string,
  digitValue: PropTypes.string,
  updateProblemNumber: PropTypes.func,
  updateNumberOfDigits: PropTypes.func,
};

const mapStateToProps = (state) => ({
  problemValue: state.greaterThanLessThanData.problemNumber,
  digitValue: state.greaterThanLessThanData.digitNumber,
});

const mapDispatchToProps = {
  updateProblemNumber,
  updateNumberOfDigits,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GreatThanLessThanPage);
