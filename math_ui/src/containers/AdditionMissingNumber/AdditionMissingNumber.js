import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NumberRange from "../../components/NumberRange";
import {
  updateProblemNumber,
  updateFromValue,
  updateToValue,
  updateRestrictions
} from "../../actions/additionMNActions";
import { LOWER_RANGE, UPPER_RANGE } from "../../constants/ranges";
import ProblemNumber from "../../components/ProblemNumber";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import * as filters from "../../constants/filters";
import { generateAdditionMN } from "../../utils/additionMNGenerator";
import { disableCreateBtn } from "../../selectors/additionMNSelector";
import axios from "axios";
import config from "../../config.json";

const AdditionMNpage = ({
  fromValue,
  toValue,
  updateFromValue,
  updateToValue,
  isFromValueError,
  isToValueError,
  problemValue,
  problemDirection,
  updateProblemNumber,
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

  const handleClickCreate = () => {
    const problems = generateAdditionMN(
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

AdditionMNpage.propTypes = {
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
  problemValue: state.additionMNData.problemNumber,
  problemDirection: state.additionMNData.problemDirection,
  fromValue: state.additionMNData.fromValue,
  toValue: state.additionMNData.toValue,
  isFromValueError: state.additionMNData.isFromValueError,
  isToValueError: state.additionMNData.isToValueError,
  restrictionsCheckedArr: state.additionMNData.restrictionsChecked,
  disableCreateBtn: disableCreateBtn(state)
});

const mapDispatchToProps = {
  updateProblemNumber,
  updateFromValue,
  updateToValue,
  updateRestrictions
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionMNpage);
