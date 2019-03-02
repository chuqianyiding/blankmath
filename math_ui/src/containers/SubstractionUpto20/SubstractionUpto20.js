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
  updateMinuend,
  handleMinuendSelectAll,
  handleMinuend0_9,
  handleMinuendClear,
  updateSubtrahend,
  handleSubtrahendSelectAll,
  handleSubtrahend0_9,
  handleSubtrahendClear
} from "../../actions/substractionAction";
import Button from "@material-ui/core/Button";
import Checkbox20 from "../../components/Checkbox20";

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

  handleMinuendCheckboxChange = name => event => {
    this.props.updateMinuend(name, event.target.checked);
  };

  handleSubtrahendCheckboxChange = name => event => {
    this.props.updateSubtrahend(name, event.target.checked);
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
        <Checkbox20
          title="Minuend"
          prefix="minuendChecked_"
          data={this.props.minuendCheckedArr}
          onCheckboxChange={this.handleMinuendCheckboxChange}
          onSelectAll={this.props.handleMinuendSelectAll}
          onSelect0_9={this.props.handleMinuend0_9}
          onClear={this.props.handleMinuendClear}
        />
        <Checkbox20
          title="Subtrahend"
          prefix="subtrahendChecked_"
          data={this.props.subtrahendCheckedArr}
          onCheckboxChange={this.handleSubtrahendCheckboxChange}
          onSelectAll={this.props.handleSubtrahendSelectAll}
          onSelect0_9={this.props.handleSubtrahend0_9}
          onClear={this.props.handleSubtrahendClear}
        />
      </React.Fragment>
    );
  }
}

SubstractionUpto20Page.propTypes = {
  problemValue: PropTypes.string,
  minuendCheckedArr: PropTypes.array,
  subtrahendCheckedArr: PropTypes.array,
  updateProblemNumber: PropTypes.func,
  updateMinuend: PropTypes.func,
  handleMinuendSelectAll: PropTypes.func,
  handleMinuend0_9: PropTypes.func,
  handleMinuendClear: PropTypes.func,
  updateSubtrahend: PropTypes.func,
  handleSubtrahendSelectAll: PropTypes.func,
  handleSubtrahend0_9: PropTypes.func,
  handleSubtrahendClear: PropTypes.func
};

const mapStateToProps = state => ({
  problemValue: state.substractionData.problemNumber,
  minuendCheckedArr: state.substractionData.minuendChecked,
  subtrahendCheckedArr: state.substractionData.subtrahendChecked
});

const mapDispatchToProps = {
  updateProblemNumber,
  updateMinuend,
  handleMinuendSelectAll,
  handleMinuend0_9,
  handleMinuendClear,
  updateSubtrahend,
  handleSubtrahendSelectAll,
  handleSubtrahend0_9,
  handleSubtrahendClear
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubstractionUpto20Page);
