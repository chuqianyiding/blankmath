import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import PropTypes from "prop-types";

const NumberRange = () => {
  return (
    <div className="mt-4">
      <FormControl component="fieldset" className="sub-form-control">
        <FormLabel component="legend">Range of number</FormLabel>
      </FormControl>
    </div>
  );
};

export default NumberRange;
