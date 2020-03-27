import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NumberRange from "../../components/NumberRange";
import {
  updateProblemNumber,
  updateProblemDirection,
  updateFromValue,
  updateToValue
} from "../../actions/additionActions";
import { LOWER_RANGE, UPPER_RANGE } from "../../constants/ranges";

const Additionpage = ({
  fromValue,
  toValue,
  updateFromValue,
  updateToValue,
  isFromValueError,
  isToValueError
}) => {
  const handleFromChange = event => {
    updateFromValue(event.target.value);
  };

  const handleToChange = event => {
    updateToValue(event.target.value);
  };

  return (
    <>
      <NumberRange
        lower={LOWER_RANGE}
        upper={UPPER_RANGE}
        fromValue={fromValue}
        toValue={toValue}
        onFromChange={handleFromChange}
        onToChange={handleToChange}
        isFromValueError={isFromValueError}
        isToValueError={isToValueError}
      />
    </>
  );
};

Additionpage.propTypes = {
  problemValue: PropTypes.string,
  problemDirection: PropTypes.string,
  fromValue: PropTypes.string,
  toValue: PropTypes.string,
  updateFromValue: PropTypes.func,
  updateToValue: PropTypes.func,
  isFromValueError: PropTypes.bool,
  isToValueError: PropTypes.bool
};

const mapStateToProps = state => ({
  problemValue: state.additionData.problemNumber,
  problemDirection: state.additionData.problemDirection,
  fromValue: state.additionData.fromValue,
  toValue: state.additionData.toValue,
  isFromValueError: state.additionData.isFromValueError,
  isToValueError: state.additionData.isToValueError
});

const mapDispatchToProps = {
  updateProblemNumber,
  updateProblemDirection,
  updateFromValue,
  updateToValue
};

export default connect(mapStateToProps, mapDispatchToProps)(Additionpage);
