import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NumberRange from "../../components/NumberRange";
import {
  updateProblemNumber,
  updateProblemDirection,
  updateFromValue,
  updateToValue,
  updateRestrictions
} from "../../actions/subtractionActions";
import { LOWER_RANGE, UPPER_RANGE } from "../../constants/ranges";
import ProblemNumber from "../../components/ProblemNumber";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import * as directions from "../../constants/directions";
import * as filters from "../../constants/filters";
import { generateSubtraction } from "../../utils/subtractionGenerator";
import { disableCreateBtn } from "../../selectors/substractionSelector";
import axios from "axios";
import config from "../../config.json";

const Subtractionpage = ({
  fromValue,
  toValue,
  updateFromValue,
  updateToValue,
  isFromValueError,
  isToValueError,
  problemValue,
  problemDirection,
  updateProblemNumber,
  updateProblemDirection,
  updateRestrictions,
  disableCreateBtn,
  restrictionsCheckedArr
}) => {
  const restrictions = [
    { key: filters.SUBTRAHEND_LESSTHAN_10, label: "Subtrahend less than 10" }
  ];

  const handleFromChange = event => {
    updateFromValue(event.target.value);
  };

  const handleToChange = event => {
    updateToValue(event.target.value);
  };

  const handleProblemNumberChange = event => {
    updateProblemNumber(event.target.value);
  };

  const handleProblemDirectionChange = event => {
    updateProblemDirection(event.target.value);
  };

  const handleClickCreate = () => {
    const problems = generateSubtraction(
      parseInt(fromValue, 10),
      parseInt(toValue, 10),
      parseInt(problemValue, 10),
      restrictionsCheckedArr
    );

    axios
      .post(config.PDFGeneratorEndpoint, {
        equations: problems,
        template: problemDirection
      })
      .then(resp => {
        window.location.href = resp.data;
      });
  };

  const handleRestrictionsCheckboxChange = name => event => {
    updateRestrictions(name, event.target.checked);
  };

  return (
    <>
      <NumberRange
        lower={LOWER_RANGE}
        upper={UPPER_RANGE}
        fromValue={fromValue}
        toValue={toValue}
        onFromChange={handleFromChange}
        onToChange={handleToChange}
        isFromValueError={isFromValueError}
        isToValueError={isToValueError}
      />

      <div className="mt-5">
        <ProblemNumber
          problemValue={problemValue}
          onProblemNumberChange={handleProblemNumberChange}
        />
      </div>

      <div className="mt-4">
        <FormControl component="fieldset" className="sub-form-control">
          <FormLabel component="legend">Write the problems</FormLabel>
          <RadioGroup
            aria-label="direction of problems"
            name="direction of problems"
            value={problemDirection}
            onChange={handleProblemDirectionChange}
          >
            <FormControlLabel
              key={directions.HORIZONTAL}
              value={directions.HORIZONTAL}
              control={<Radio color="primary" />}
              label={directions.HORIZONTAL}
              labelPlacement="end"
              className="sub-form-control-label"
            />
            <FormControlLabel
              key={directions.VERTICAL}
              value={directions.VERTICAL}
              control={<Radio color="primary" />}
              label={directions.VERTICAL}
              labelPlacement="end"
              className="sub-form-control-label"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="mt-4">
        <FormLabel component="legend">Restrictions</FormLabel>
        <FormGroup>
          {restrictions.map(item => (
            <FormControlLabel
              key={item.key}
              control={
                <Checkbox
                  checked={restrictionsCheckedArr.includes(item.key)}
                  onChange={handleRestrictionsCheckboxChange(item.key)}
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
          disabled={disableCreateBtn}
          onClick={handleClickCreate}
        >
          Create
        </Button>
      </div>
    </>
  );
};

Subtractionpage.propTypes = {
  problemValue: PropTypes.string,
  problemDirection: PropTypes.string,
  fromValue: PropTypes.string,
  toValue: PropTypes.string,
  updateFromValue: PropTypes.func,
  updateToValue: PropTypes.func,
  isFromValueError: PropTypes.bool,
  isToValueError: PropTypes.bool,
  updateProblemNumber: PropTypes.func,
  updateProblemDirection: PropTypes.func,
  restrictionsCheckedArr: PropTypes.array,
  updateRestrictions: PropTypes.func,
  disableCreateBtn: PropTypes.bool
};

const mapStateToProps = state => ({
  problemValue: state.subtractionData.problemNumber,
  problemDirection: state.subtractionData.problemDirection,
  fromValue: state.subtractionData.fromValue,
  toValue: state.subtractionData.toValue,
  isFromValueError: state.subtractionData.isFromValueError,
  isToValueError: state.subtractionData.isToValueError,
  restrictionsCheckedArr: state.subtractionData.restrictionsChecked,
  disableCreateBtn: disableCreateBtn(state)
});

const mapDispatchToProps = {
  updateProblemNumber,
  updateProblemDirection,
  updateFromValue,
  updateToValue,
  updateRestrictions
};

export default connect(mapStateToProps, mapDispatchToProps)(Subtractionpage);
