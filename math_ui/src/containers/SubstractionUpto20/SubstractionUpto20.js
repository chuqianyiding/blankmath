import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  updateProblemNumber,
  updateMinuend
} from "../../actions/substractionAction";

import "./SubstractionUpto20.scss";

class SubstractionUpto20Page extends React.Component {
  problems = [
    { value: "10", label: "10 problems", key: "problem_10" },
    { value: "20", label: "20 problems", key: "problem_20" },
    { value: "30", label: "30 problems", key: "problem_30" },
    { value: "50", label: "50 problems", key: "problem_50" }
  ];

  arr20 = Array.from(new Array(21), (val, index) => index);

  handleRadioGroupChange = event => {
    this.props.updateProblemNumber(event.target.value);
  };

  handleCheckboxChange = name => event => {
    this.props.updateMinuend(name, event.target.checked);
  };

  render() {
    const { problemValue } = this.props;
    return (
      <React.Fragment>
        <div className="mt-4">
          <h3> Substraction -- Numbers up to 20</h3>
        </div>
        <div className="mt-4">
          <FormControl component="fieldset" className="sub-form-control">
            <FormLabel component="legend">Number of Problems</FormLabel>
            <RadioGroup
              aria-label="number of problems"
              name="gender2"
              value={problemValue}
              onChange={this.handleRadioGroupChange}
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
        <div className="mt-4">
          <FormLabel component="legend">Minuend</FormLabel>
          <FormGroup row>
            {this.arr20.map(item => (
              <FormControlLabel
                key={`minuend_${item}`}
                control={
                  <Checkbox
                    checked={this.props[`minuendChecked_${item}`]}
                    onChange={this.handleCheckboxChange(
                      `minuendChecked_${item}`
                    )}
                    value="checked0"
                    color="primary"
                  />
                }
                label={item}
              />
            ))}
          </FormGroup>
        </div>
      </React.Fragment>
    );
  }
}

SubstractionUpto20Page.propTypes = {
  problemValue: PropTypes.string,
  updateProblemNumber: PropTypes.func,
  updateMinuend: PropTypes.func
};

const mapStateToProps = state => ({
  problemValue: state.substractionData.problemNumber
});

const mapDispatchToProps = {
  updateProblemNumber,
  updateMinuend
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubstractionUpto20Page);
