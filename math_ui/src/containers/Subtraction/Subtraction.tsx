import React from "react";
import { connect } from "react-redux";
import NumberRange from "../../components/NumberRange";
import {
  updateProblemNumber,
  updateProblemDirection,
  updateFromValue,
  updateToValue,
  updateRestrictions,
} from "../../actions/subtractionActions";
import { typedAction } from "../../actions/types";
import { ApplicationState } from "../../reducers";
import { Direction } from "../../constants/directions";
import { LOWER_RANGE, UPPER_RANGE } from "../../constants/ranges";
import ProblemNumber from "../../components/ProblemNumber";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import ProblemDirection from "../../components/ProblemDirection";
import * as filters from "../../constants/filters";
import { generateSubtraction } from "../../utils/subtractionGenerator";
import { selectDisableCreateBtn } from "../../selectors/substractionSelector";
import axios from "axios";
import config from "../../config.json";

interface SubtractionPageProps {
  fromValue: string;
  toValue: string;
  updateFromValue: (value: string) => typedAction;
  updateToValue: (value: string) => typedAction;
  isFromValueError: boolean;
  isToValueError: boolean;
  problemValue: string;
  problemDirection: Direction;
  updateProblemNumber: (value: string) => typedAction;
  updateProblemDirection: (value: Direction) => typedAction;
  updateRestrictions: (
    checkboxName: string,
    value: boolean
  ) => typedAction;
  disableCreateBtn: boolean;
  restrictionsCheckedArr: string[];
}

const SubtractionPage: React.FC<SubtractionPageProps> = ({
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
  restrictionsCheckedArr,
}:SubtractionPageProps) => {
  const restrictions = [
    { key: filters.SUBTRAHEND_LESSTHAN_10, label: "Subtrahend less than 10" },
  ];

  const handleFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFromValue(event.target.value);
  };

  const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateToValue(event.target.value);
  };

  const handleProblemNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateProblemNumber(event.target.value);
  };

  const handleProblemDirectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateProblemDirection(event.target.value as Direction);
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
        template: problemDirection,
      })
      .then((resp) => {
        window.open(resp.data);
      });
  };

  const handleRestrictionsCheckboxChange = (name:string) => (event: React.ChangeEvent<HTMLInputElement>) => {
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
        <ProblemDirection
          problemDirection={problemDirection}
          onDirectionchange={handleProblemDirectionChange}
        />
      </div>

      <div className="mt-4">
        <FormLabel component="legend">Restrictions</FormLabel>
        <FormGroup>
          {restrictions.map((item) => (
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

const mapStateToProps = (state:ApplicationState) => ({
  problemValue: state.subtractionData.problemNumber,
  problemDirection: state.subtractionData.problemDirection,
  fromValue: state.subtractionData.fromValue,
  toValue: state.subtractionData.toValue,
  isFromValueError: state.subtractionData.isFromValueError,
  isToValueError: state.subtractionData.isToValueError,
  restrictionsCheckedArr: state.subtractionData.restrictionsChecked,
  disableCreateBtn: selectDisableCreateBtn(state),
});

const mapDispatchToProps = {
  updateProblemNumber,
  updateProblemDirection,
  updateFromValue,
  updateToValue,
  updateRestrictions,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubtractionPage);
