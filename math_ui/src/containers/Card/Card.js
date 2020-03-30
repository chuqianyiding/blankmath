import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Card from "../../components/Card";

const CardContainer = props => {
  const handleClick = () => {
    const { link, history } = props;
    history.push(link);
  };
  return <Card {...props} onClick={handleClick} />;
};

CardContainer.propTypes = {
  link: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func,
    back: PropTypes.func
  })
};

export default withRouter(CardContainer);
