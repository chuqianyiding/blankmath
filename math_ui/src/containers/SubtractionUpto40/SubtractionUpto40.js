import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import {
  updateProblemNumber,
  updateProblemDirection,
  updateRestrictions
} from "../../actions/subtractionUpto40Action";
import * as directions from "../../constants/directions";
import ProblemNumber from "../../components/ProblemNumber";
import * as filters from "../../constants/filters";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { generateSubtractionUpto40 } from "../../utils/subtractionUpto40Generator";
import axios from "axios";
import config from "../../config.json";

class SubtractionUpto40Page extends React.Component {
  restrictions = [
    {
      key: filters.SUBTRAHEND_LESSTHAN_10,
      label: "Subtrahend less than 10"
    }
  ];

  handleProblemNumberChange = event => {
    this.props.updateProblemNumber(event.target.value);
  };

  handleProblemDirectionChange = event => {
    this.props.updateProblemDirection(event.target.value);
  };

  handleRestrictionsCheckboxChange = name => event => {
    this.props.updateRestrictions(name, event.target.checked);
  };

  handleClickCreate = () => {
    const problems = generateSubtractionUpto40(
      parseInt(this.props.problemValue, 10),
      this.props.restrictionsCheckedArr
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
    const {
      problemValue,
      problemDirection,
      restrictionsCheckedArr
    } = this.props;
    return (
      <>
        <div className="mt-4">
          <h3> Subtraction -- Numbers up to 40</h3>
        </div>

        <ProblemNumber
          problemValue={problemValue}
          onProblemNumberChange={this.handleProblemNumberChange}
        />

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
                key={directions.HORIZONTAL}
                value={directions.HORIZONTAL}
                control={<Radio color="primary" />}
                label={directions.HORIZONTAL}
                labelPlacement="start"
                className="sub-form-control-label"
              />
              <FormControlLabel
                key={directions.VERTICAL}
                value={directions.VERTICAL}
                control={<Radio color="primary" />}
                label={directions.VERTICAL}
                labelPlacement="start"
                className="sub-form-control-label"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="mt-4">
          <FormLabel component="legend">Restrictions</FormLabel>
          <FormGroup>
            {this.restrictions.map(item => (
              <FormControlLabel
                key={item.key}
                control={
                  <Checkbox
                    checked={restrictionsCheckedArr.includes(item.key)}
                    onChange={this.handleRestrictionsCheckboxChange(item.key)}
                    color="primary"
                  />
                }
                label={item.label}
              />
            ))}
          </FormGroup>
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

SubtractionUpto40Page.propTypes = {
  problemValue: PropTypes.string,
  problemDirection: PropTypes.string,
  updateProblemNumber: PropTypes.func,
  updateProblemDirection: PropTypes.func,
  restrictionsCheckedArr: PropTypes.array,
  updateRestrictions: PropTypes.func
};

const mapStateToProps = state => ({
  problemValue: state.subtractionUpto40Data.problemNumber,
  problemDirection: state.subtractionUpto40Data.problemDirection,
  restrictionsCheckedArr: state.subtractionUpto40Data.restrictionsChecked
});

const mapDispatchToProps = {
  updateProblemNumber,
  updateProblemDirection,
  updateRestrictions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubtractionUpto40Page);
