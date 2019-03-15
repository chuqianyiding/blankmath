import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { updateProblemNumber } from "../../actions/substractionMNUpto20Action";

class SubstractionMNUpto20 extends React.Component {
  problems = [
    { value: "10", label: "10 problems", key: "problem_10" },
    { value: "20", label: "20 problems", key: "problem_20" },
    { value: "30", label: "30 problems", key: "problem_30" },
    { value: "50", label: "50 problems", key: "problem_50" }
  ];

  handleProblemNumberChange = event => {
    this.props.updateProblemNumber(event.target.value);
  };

  render() {
    const { problemValue } = this.props;
    return (
      <React.Fragment>
        <div className="mt-4">
          <h3> Substraction -- Missing Number -- Numbers up to 20</h3>
        </div>
        <div className="mt-4">
          <FormControl component="fieldset" className="sub-form-control">
            <FormLabel component="legend">Number of Problems</FormLabel>
            <RadioGroup
              aria-label="number of problems"
              name="number of problems"
              value={problemValue}
              onChange={this.handleProblemNumberChange}
            >
              {this.problems.map(item => (
                <FormControlLabel
                  key={item.key}
                  value={item.value}
                  control={<Radio color="primary" />}
                  label={item.label}
                  labelPlacement="start"
                  className="sub-form-control-label"
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      </React.Fragment>
    );
  }
}

SubstractionMNUpto20.propTypes = {
  problemValue: PropTypes.string,
  updateProblemNumber: PropTypes.func
};

const mapStateToProps = state => ({
  problemValue: state.subtractionMNUpto20Data.problemNumber
});

const mapDispatchToProps = {
  updateProblemNumber
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubstractionMNUpto20);
