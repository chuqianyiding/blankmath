import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import PropTypes from "prop-types";

const options = [
  { value: "1d", label: "1 digit", key: "digit_1" },
  { value: "2d", label: "2 digit", key: "digit_2" },
  { value: "3d", label: "3 digit", key: "digit_3" },
  { value: "l20", label: "numbers less than 20", key: "digit_l20" }
];

const NumberOfDigits = ({ digitValue, onDigitChange }) => {
  return (
    <div className="mt-4">
      <FormControl component="fieldset" className="sub-form-control">
        <FormLabel component="legend">Number of Digits</FormLabel>
        <RadioGroup
          aria-label="number of digits"
          name="number of digits"
          value={digitValue}
          onChange={onDigitChange}
        >
          {options.map(item => (
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
    </div>
  );
};

NumberOfDigits.propTypes = {
  digitValue: PropTypes.string,
  onDigitChange: PropTypes.func
};

export default NumberOfDigits;
