import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  updateProblemNumber,
  updateProblemDirection,
  updateMinuend,
  handleMinuendSelectAll,
  handleMinuend0_9,
  handleMinuendClear,
  updateSubtrahend,
  handleSubtrahendSelectAll,
  handleSubtrahend0_9,
  handleSubtrahendClear
} from "../../actions/subtractionUpto20Action";
import Button from "@material-ui/core/Button";
import Checkbox20 from "../../components/Checkbox20";
import config from "../../config.json";
import { isCreatBtnActive } from "../../selectors/SubstractionSelector";
import { generateSubstraction } from "../../utils/substractionProblemGenerator";
import axios from "axios";
import "./SubtractionUpto20.scss";

class SubtractionUpto20Page extends React.Component {
  problems = [
    { value: "10", label: "10 problems", key: "problem_10" },
    { value: "20", label: "20 problems", key: "problem_20" },
    { value: "30", label: "30 problems", key: "problem_30" },
    { value: "50", label: "50 problems", key: "problem_50" }
  ];

  arr20 = Array.from(new Array(21), (val, index) => index);

  handleProblemNumberChange = event => {
    this.props.updateProblemNumber(event.target.value);
  };

  handleProblemDirectionChange = event => {
    this.props.updateProblemDirection(event.target.value);
  };

  handleMinuendCheckboxChange = name => event => {
    this.props.updateMinuend(name, event.target.checked);
  };

  handleSubtrahendCheckboxChange = name => event => {
    this.props.updateSubtrahend(name, event.target.checked);
  };

  handleClickCreate = () => {
    const problems = generateSubstraction(
      this.props.minuendCheckedArr,
      this.props.subtrahendCheckedArr,
      parseInt(this.props.problemValue, 10)
    );

    axios
      .post(config.PDFGeneratorEndpoint, {
        equations: problems,
        template: this.props.problemDirection
      })
      .then(resp => {
        window.location.href = resp.data;
      });
  };

  render() {
    const { problemValue, problemDirection } = this.props;

    return (
      <React.Fragment>
        <div className="mt-4">
          <h3> Subtraction -- Numbers up to 20</h3>
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
        <div className="mt-4">
          <FormControl component="fieldset" className="sub-form-control">
            <FormLabel component="legend">Write the problems</FormLabel>
            <RadioGroup
              aria-label="direction of problems"
              name="direction of problems"
              value={problemDirection}
              onChange={this.handleProblemDirectionChange}
            >
              <FormControlLabel
                key="horizontal"
                value="horizontal"
                control={<Radio color="primary" />}
                label="horizontal"
                labelPlacement="start"
                className="sub-form-control-label"
              />
              <FormControlLabel
                key="vertical"
                value="vertical"
                control={<Radio color="primary" />}
                label="vertical"
                labelPlacement="start"
                className="sub-form-control-label"
              />
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
        <div className="mt-4">
          {" "}
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClickCreate}
            disabled={this.props.disableCreateBtn}
          >
            Create
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

SubtractionUpto20Page.propTypes = {
  problemValue: PropTypes.string,
  problemDirection: PropTypes.string,
  minuendCheckedArr: PropTypes.array,
  subtrahendCheckedArr: PropTypes.array,
  updateProblemNumber: PropTypes.func,
  updateProblemDirection: PropTypes.func,
  updateMinuend: PropTypes.func,
  handleMinuendSelectAll: PropTypes.func,
  handleMinuend0_9: PropTypes.func,
  handleMinuendClear: PropTypes.func,
  updateSubtrahend: PropTypes.func,
  handleSubtrahendSelectAll: PropTypes.func,
  handleSubtrahend0_9: PropTypes.func,
  handleSubtrahendClear: PropTypes.func,
  disableCreateBtn: PropTypes.bool
};

const mapStateToProps = state => ({
  problemValue: state.subtractionUpto20Data.problemNumber,
  problemDirection: state.subtractionUpto20Data.problemDirection,
  minuendCheckedArr: state.subtractionUpto20Data.minuendChecked,
  subtrahendCheckedArr: state.subtractionUpto20Data.subtrahendChecked,
  disableCreateBtn: !isCreatBtnActive(
    state.subtractionUpto20Data.minuendChecked,
    state.subtractionUpto20Data.subtrahendChecked
  )
});

const mapDispatchToProps = {
  updateProblemNumber,
  updateProblemDirection,
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
)(SubtractionUpto20Page);
