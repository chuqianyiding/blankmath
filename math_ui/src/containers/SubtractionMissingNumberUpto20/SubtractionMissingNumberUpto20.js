import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import {
  updateProblemNumber,
  updateRestrictions
} from "../../actions/substractionMNUpto20Action";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import * as filters from "../../constants/filters";
import { generateSubstractionMN } from "../../utils/substractionMNGenerator";
import axios from "axios";
import config from "../../config.json";
import * as directions from "../../constants/directions";
import ProblemNumber from "../../components/ProblemNumber";

class SubstractionMNUpto20 extends React.Component {
  restrictions = [
    { key: filters.SUBTRAHEND_LESSTHAN_10, label: "Subtrahend less than 10" }
  ];

  handleProblemNumberChange = event => {
    this.props.updateProblemNumber(event.target.value);
  };

  handleRestrictionsCheckboxChange = name => event => {
    this.props.updateRestrictions(name, event.target.checked);
  };

  handleClickCreate = () => {
    const problems = generateSubstractionMN(
      parseInt(this.props.problemValue, 10),
      this.props.restrictionsCheckedArr
    );

    axios
      .post(config.PDFGeneratorEndpoint, {
        equations: problems,
        template: directions.HORIZONTAL
      })
      .then(resp => {
        window.location.href = resp.data;
      });
  };

  render() {
    const { problemValue, restrictionsCheckedArr } = this.props;
    return (
      <React.Fragment>
        <div className="mt-4">
          <h3> Substraction -- Missing Number -- Numbers up to 20</h3>
        </div>

        <ProblemNumber
          problemValue={problemValue}
          onProblemNumberChange={this.handleProblemNumberChange}
        />
        <div className="mt-4">
          <FormLabel component="legend">Restrictions</FormLabel>
          <FormGroup>
            {this.restrictions.map(item => (
              <FormControlLabel
                key={item.key}
                control={
                  <Checkbox
                    checked={restrictionsCheckedArr.includes(item.key)}
                    onChange={this.handleRestrictionsCheckboxChange(item.key)}
                    color="primary"
                  />
                }
                label={item.label}
              />
            ))}
          </FormGroup>
        </div>
        <div className="mt-4">
          {" "}
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClickCreate}
          >
            Create
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

SubstractionMNUpto20.propTypes = {
  problemValue: PropTypes.string,
  updateProblemNumber: PropTypes.func,
  restrictionsCheckedArr: PropTypes.array,
  updateRestrictions: PropTypes.func
};

const mapStateToProps = state => ({
  problemValue: state.subtractionMNUpto20Data.problemNumber,
  restrictionsCheckedArr: state.subtractionMNUpto20Data.restrictionsChecked
});

const mapDispatchToProps = {
  updateProblemNumber,
  updateRestrictions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubstractionMNUpto20);
