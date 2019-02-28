import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const arr20 = Array.from(new Array(21), (val, index) => index);

const Checkbox20Component = ({
  title,
  prefix,
  data,
  onCheckboxChange,
  onSelectAll,
  onSelect0_9,
  onClear
}) => {
  return (
    <React.Fragment>
      <div className="mt-4">
        <FormLabel component="legend">{title}</FormLabel>
        <FormGroup row>
          {arr20.map(item => (
            <FormControlLabel
              key={`${prefix}${item}`}
              control={
                <Checkbox
                  checked={data[`${prefix}${item}`]}
                  onChange={onCheckboxChange(`${prefix}${item}`)}
                  color="primary"
                />
              }
              label={item}
            />
          ))}
        </FormGroup>
      </div>
      <div className="mt-2">
        <Button variant="outlined" color="primary" onClick={onSelectAll}>
          Select All
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className="ml-4"
          onClick={onSelect0_9}
        >
          0 - 9
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className="ml-4"
          onClick={onClear}
        >
          Clear
        </Button>
      </div>
    </React.Fragment>
  );
};

Checkbox20Component.propTypes = {
  title: PropTypes.string,
  prefix: PropTypes.string,
  data: PropTypes.object,
  onCheckboxChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelect0_9: PropTypes.func,
  onClear: PropTypes.func
};

export default Checkbox20Component;
