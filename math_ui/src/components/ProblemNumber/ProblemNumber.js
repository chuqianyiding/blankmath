import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import PropTypes from "prop-types";

const problems = [
  { value: "10", label: "10 problems", key: "problem_10" },
  { value: "20", label: "20 problems", key: "problem_20" },
  { value: "30", label: "30 problems", key: "problem_30" },
  { value: "50", label: "50 problems", key: "problem_50" }
];

const ProblemNumberComponent = ({ problemValue, onProblemNumberChange }) => {
  return (
    <FormControl component="fieldset" className="sub-form-control">
      <FormLabel component="legend">Number of Problems</FormLabel>
      <RadioGroup
        aria-label="number of problems"
        name="number of problems"
        value={problemValue}
        onChange={onProblemNumberChange}
      >
        {problems.map(item => (
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

ProblemNumberComponent.propTypes = {
  problemValue: PropTypes.string,
  onProblemNumberChange: PropTypes.func
};

export default ProblemNumberComponent;
