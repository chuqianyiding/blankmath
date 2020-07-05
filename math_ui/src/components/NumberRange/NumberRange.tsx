import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";


interface NumberRangeProps{
  lower:number;
  upper:number;
  onFromChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
  onToChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fromValue:string;
  toValue:string;
  isFromValueError: boolean;
  isToValueError:boolean;
}

const NumberRange: React.FC<NumberRangeProps> = ({
  lower,
  upper,
  onFromChange,
  onToChange,
  fromValue,
  toValue,
  isFromValueError,
  isToValueError
}:NumberRangeProps) => {
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

export default NumberRange;
