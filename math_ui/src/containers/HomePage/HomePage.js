import React from "react";
import "./HomePage.scss";
import bee from "../../images/bee-705412.svg";

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">Blankmath</div>
        <div className="image-section">
          <img src={bee} alt="bee" />
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
