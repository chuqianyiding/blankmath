import React from "react";
import "./Header.scss";

interface HeaderProps {
  onClickLogo: () => void;
}

const Header:React.FC<HeaderProps> = ({ onClickLogo }: HeaderProps) => {
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

export default Header;
