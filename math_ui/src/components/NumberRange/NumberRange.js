import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const NumberRange = ({
  lower,
  upper,
  onFromChange,
  onToChange,
  fromValue,
  toValue,
  isFromValueError,
  isToValueError
}) => {
  const defaultHelperText = `${lower} <= number <= ${upper}`;

  const getFromHelperText = () =>
    isFromValueError ? "invalid entry" : defaultHelperText;

  const getToHelperText = () =>
    isToValueError ? "invalid entry" : defaultHelperText;

  return (
    <div className="mt-5">
      <FormControl component="fieldset" className="sub-form-control">
        <FormLabel component="legend">Range of number</FormLabel>
        <div className="pt-3 d-flex flex-row">
          <div className="mr-3">
            <TextField
              id="outlined-number"
              label="From"
              type="number"
              error={isFromValueError}
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              helperText={getFromHelperText()}
              onChange={onFromChange}
              value={fromValue}
            />
          </div>
          <div>
            <TextField
              id="outlined-number"
              label="To"
              type="number"
              error={isToValueError}
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              helperText={getToHelperText()}
              onChange={onToChange}
              value={toValue}
            />
          </div>
        </div>
      </FormControl>
    </div>
  );
};

NumberRange.defaultProps = {
  lower: 0,
  upper: 1000,
  onFromChange: () => {},
  onToChange: () => {},
  fromValue: "0",
  toValue: "20",
  isFromValueError: false,
  isToValueError: false
};

NumberRange.propTypes = {
  lower: PropTypes.number,
  upper: PropTypes.number,
  fromValue: PropTypes.string,
  toValue: PropTypes.string,
  onFromChange: PropTypes.func,
  onToChange: PropTypes.func,
  isFromValueError: PropTypes.bool,
  isToValueError: PropTypes.bool
};

export default NumberRange;
