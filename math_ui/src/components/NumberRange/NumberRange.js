import React, { useState } from "react";
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
  toValue
}) => {
  const defaultHelperText = `${lower} <= number <= ${upper}`;
  const [fromFieldError, setFromFieldError] = useState(false);
  const [toFieldError, setToFieldError] = useState(false);

  const handleFromChange = event => {
    const value = event.target.value;
    if (value >= lower && value <= upper && value < toValue) {
      setFromFieldError(false);
    } else {
      setFromFieldError(true);
    }
    onFromChange(event);
  };

  const handleToChange = event => {
    const value = event.target.value;
    if (value >= lower && value <= upper && value > fromValue) {
      setToFieldError(false);
    } else {
      setToFieldError(true);
    }
    onToChange(event);
  };

  const getFromHelperText = () => {
    if (fromFieldError || fromValue >= toValue) {
      return "invalid entry";
    }

    return defaultHelperText;
  };

  const getToHelperText = () => {
    if (toFieldError || fromValue >= toValue) {
      return "invalid entry";
    }

    return defaultHelperText;
  };

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
              error={fromFieldError}
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              helperText={getFromHelperText()}
              onChange={handleFromChange}
              value={fromValue}
            />
          </div>
          <div>
            <TextField
              id="outlined-number"
              label="To"
              type="number"
              error={toFieldError}
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              helperText={getToHelperText()}
              onChange={handleToChange}
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
  fromValue: 0,
  toValue: 20
};

NumberRange.propTypes = {
  lower: PropTypes.number,
  upper: PropTypes.number,
  fromValue: PropTypes.number,
  toValue: PropTypes.number,
  onFromChange: PropTypes.func,
  onToChange: PropTypes.func
};

export default NumberRange;
