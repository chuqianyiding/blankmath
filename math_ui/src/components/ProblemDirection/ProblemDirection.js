import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import PropTypes from "prop-types";
import * as directions from "../../constants/directions";

const dirs = [
  {
    value: directions.HORIZONTAL,
    label: directions.HORIZONTAL,
    key: `direction_${directions.HORIZONTAL}`
  },
  {
    value: directions.VERTICAL,
    label: directions.VERTICAL,
    key: `direction_${directions.VERTICAL}`
  }
];

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
        {dirs.map(item => (
          <FormControlLabel
            key={item.key}
            value={item.value}
            control={<Radio color="primary" />}
            label={item.label}
            className="sub-form-control-label"
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

ProblemDirection.propTypes = {
  problemDirection: PropTypes.string,
  onDirectionchange: PropTypes.func
};
export default ProblemDirection;
