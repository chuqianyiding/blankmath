import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {
  updateProblemNumber,
  updateProblemDirection,
  updateAddend,
  handleAddendSelectAll,
  handleAddend0_9,
  handleAddendClear
} from "../../actions/additionUpto20Actions";
import * as directions from "../../constants/directions";
import ProblemNumber from "../../components/ProblemNumber";
import Checkbox20 from "../../components/Checkbox20";
import Button from "@material-ui/core/Button";
import { isCreatBtnActive } from "../../selectors/AdditionSelector";

class AdditionUpto20Page extends React.Component {
  handleProblemNumberChange = event => {
    this.props.updateProblemNumber(event.target.value);
  };

  handleProblemDirectionChange = event => {
    this.props.updateProblemDirection(event.target.value);
  };

  handleAddendCheckboxChange = name => event => {
    this.props.updateAddend(name, event.target.checked);
  };

  handleClickCreate = () => {};

  render() {
    const { problemValue, problemDirection } = this.props;

    return (
      <React.Fragment>
        <div className="mt-4">
          <h3> Addition -- Numbers up to 20</h3>
        </div>

        <ProblemNumber
          problemValue={problemValue}
          onProblemNumberChange={this.handleProblemNumberChange}
        />

        <div className="mt-4">
          <FormControl component="fieldset" className="sub-form-control">
            <FormLabel component="legend">Write the problems</FormLabel>
            <RadioGroup
              aria-label="direction of problems"
              name="direction of problems"
              value={problemDirection}
              onChange={this.handleProblemDirectionChange}
            >
              <FormControlLabel
                key={directions.HORIZONTAL}
                value={directions.HORIZONTAL}
                control={<Radio color="primary" />}
                label={directions.HORIZONTAL}
                labelPlacement="start"
                className="sub-form-control-label"
              />
              <FormControlLabel
                key={directions.VERTICAL}
                value={directions.VERTICAL}
                control={<Radio color="primary" />}
                label={directions.VERTICAL}
                labelPlacement="start"
                className="sub-form-control-label"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <Checkbox20
          title="Addend"
          prefix="addendChecked_"
          data={this.props.addendCheckedArr}
          onCheckboxChange={this.handleAddendCheckboxChange}
          onSelectAll={this.props.handleAddendSelectAll}
          onSelect0_9={this.props.handleAddend0_9}
          onClear={this.props.handleAddendClear}
        />

        <div className="mt-4">
          {" "}
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClickCreate}
            disabled={this.props.disableCreateBtn}
          >
            Create
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

AdditionUpto20Page.propTypes = {
  problemValue: PropTypes.string,
  problemDirection: PropTypes.string,
  updateProblemNumber: PropTypes.func,
  updateProblemDirection: PropTypes.func,
  updateAddend: PropTypes.func,
  addendCheckedArr: PropTypes.array,
  handleAddendSelectAll: PropTypes.func,
  handleAddend0_9: PropTypes.func,
  handleAddendClear: PropTypes.func,
  disableCreateBtn: PropTypes.bool
};

const mapStateToProps = state => ({
  problemValue: state.additionUpto20Data.problemNumber,
  problemDirection: state.additionUpto20Data.problemDirection,
  addendCheckedArr: state.additionUpto20Data.addendChecked,
  disableCreateBtn: !isCreatBtnActive(state.additionUpto20Data.addendChecked)
});

const mapDispatchToProps = {
  updateProblemNumber,
  updateProblemDirection,
  updateAddend,
  handleAddendSelectAll,
  handleAddend0_9,
  handleAddendClear
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdditionUpto20Page);
