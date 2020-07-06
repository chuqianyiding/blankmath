import React from "react";
import { connect } from "react-redux";
import NumberRange from "../../components/NumberRange";
import {
  updateProblemNumber,
  updateFromValue,
  updateToValue,
  updateRestrictions,
} from "../../actions/subtractionMNActions";
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
import * as filters from "../../constants/filters";
import { generateSubstractionMN } from "../../utils/substractionMNGenerator";
import { selectDisableCreateBtn } from "../../selectors/subtractionMNSelector";
import axios from "axios";
import config from "../../config.json";

interface SubtractionMNPageProps {
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

const SubtractionMNPage:React.FC<SubtractionMNPageProps> = ({
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
  restrictionsCheckedArr,
}:SubtractionMNPageProps) => {
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

  const handleClickCreate = () => {
    const problems = generateSubstractionMN(
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
  problemValue: state.subtractionMNData.problemNumber,
  problemDirection: state.subtractionMNData.problemDirection,
  fromValue: state.subtractionMNData.fromValue,
  toValue: state.subtractionMNData.toValue,
  isFromValueError: state.subtractionMNData.isFromValueError,
  isToValueError: state.subtractionMNData.isToValueError,
  restrictionsCheckedArr: state.subtractionMNData.restrictionsChecked,
  disableCreateBtn: selectDisableCreateBtn(state),
});

const mapDispatchToProps = {
  updateProblemNumber,
  updateFromValue,
  updateToValue,
  updateRestrictions,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubtractionMNPage);
