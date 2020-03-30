import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import PropTypes from "prop-types";
import * as directions from "../../constants/directions";

const ProblemDirection = ({ problemDirection, onDirectionchange }) => {
  return (
    <FormControl component="fieldset" className="sub-form-control">
      <FormLabel component="legend">Direction of Problems</FormLabel>
      <RadioGroup
        row
        aria-label="direction of problems"
        name="direction of problems"
        value={problemDirection}
        onChange={onDirectionchange}
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
  );
};

ProblemDirection.propTypes = {
  problemDirection: PropTypes.string,
  onDirectionchange: PropTypes.func
};
export default ProblemDirection;
