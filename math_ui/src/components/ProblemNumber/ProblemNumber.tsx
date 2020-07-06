import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

interface ProblemType {
  value: string;
  label: string;
  key: string;
}

const problems: ProblemType[] = [
  { value: "10", label: "10 problems", key: "problem_10" },
  { value: "20", label: "20 problems", key: "problem_20" },
  { value: "30", label: "30 problems", key: "problem_30" },
  { value: "50", label: "50 problems", key: "problem_50" }
];

interface ProblemNumberComponentProps {
  problemValue:string;
  onProblemNumberChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProblemNumberComponent:React.FC<ProblemNumberComponentProps> = ({ problemValue, onProblemNumberChange }:ProblemNumberComponentProps) => {
  return (
    <FormControl component="fieldset" className="sub-form-control">
      <FormLabel component="legend">Number of Problems</FormLabel>
      <RadioGroup
        row
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

export default ProblemNumberComponent;
