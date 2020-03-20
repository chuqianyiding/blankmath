import React from "react";
import "./HomePage.scss";
import bee from "../../img/bee-705412.svg";
import Card from "../../components/Card";
import { cardData } from "../../constants/cardData";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative bm-bee-container">
          <img src={bee} alt="bee" />
        </div>
        <div className="bm-bullet-container">
          <ul>
            <div className="d-md-none d-lg-block">
              <li className="bm-text-24">Printable in PDF format</li>
            </div>
            <div className="d-none d-md-block d-lg-none">
              <li className="bm-text-24">Printable</li>
            </div>
            <li className="bm-text-24">100% free</li>
            <li className="bm-text-24">Open source</li>
          </ul>
        </div>

        <div className="mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {cardData.map(item => (
            <div
              key={item.cardKey}
              className="col d-flex justify-content-center bm-card-container"
            >
              <Card
                key={item.cardKey}
                sign={item.sign}
                title={item.title}
                subtitle={item.subtitle}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default HomePage;
