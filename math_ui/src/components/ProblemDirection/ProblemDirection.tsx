import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Direction } from "../../constants/directions";

interface DirType {
  value: Direction;
  label: Direction;
  key:string;
}

const dirs:DirType[] = [
  {
    value: Direction.HORIZONTAL,
    label: Direction.HORIZONTAL,
    key: `direction_${Direction.HORIZONTAL}`
  },
  {
    value: Direction.VERTICAL,
    label: Direction.VERTICAL,
    key: `direction_${Direction.VERTICAL}`
  }
];

interface ProblemDirectionProps {
  problemDirection: Direction;
  onDirectionchange:(event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProblemDirection:React.FC<ProblemDirectionProps> = ({ problemDirection, onDirectionchange }:ProblemDirectionProps) => {
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

export default ProblemDirection;
