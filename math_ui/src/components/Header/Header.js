import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = ({ onClickLogo }) => {
  return (
    <div className="bm-header d-flex flex-md-row flex-column mb-3">
      <div className="bm-header-title" onClick={onClickLogo}>
        Blankmath
      </div>
      <div className="bm-header-subtitle ml-md-3 mt-2 align-self-md-center">
        Unlimited FREE math worksheets
      </div>
    </div>
  );
};

Header.propTypes = {
  onClickLogo: PropTypes.func
};

export default Header;
