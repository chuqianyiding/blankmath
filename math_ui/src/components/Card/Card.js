import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faGreaterThan,
  faLessThan,
  faTimes,
  faDivide
} from "@fortawesome/free-solid-svg-icons";
import "./Card.scss";

const getSignIcon = sign => {
  switch (sign) {
    case "plus":
      return faPlus;
    case "minus":
      return faMinus;
    case "times":
      return faTimes;
    case "divide":
      return faDivide;
    case "greaterThan":
      return faGreaterThan;
    case "lessThan":
      return faLessThan;
    default:
      return faPlus;
  }
};

const Card = ({ cardKey, sign, title, subtitle }) => {
  //   return (
  //     <div className="bm-card">
  //       <div className="bm-sign-area position-absolute d-flex justify-content-center align-items-center">
  //         <FontAwesomeIcon icon={faPlus} size="2x" />
  //       </div>
  //       <div className="bm-des-area position-absolute d-flex justify-content-center align-items-center">
  //         <div className="flex-column">
  //           <div className="bm-des-title d-flex justify-content-center">
  //             Missing Number
  //           </div>
  //           <div className="d-flex justify-content-center">12 + 9 = ?</div>
  //           <div className="d-flex justify-content-center">2 + 8 = ?</div>
  //         </div>
  //       </div>
  //       <div className="bm-but-area position-absolute d-flex justify-content-center align-items-center">
  //         <button className="bm-card-btn">Generate</button>
  //       </div>
  //     </div>
  //   );

  return (
    <div className="bm-card">
      <div className="bm-sign-area position-absolute d-flex justify-content-center align-items-center">
        {sign.map((item, idx) => (
          <FontAwesomeIcon
            className="mr-3"
            key={`${cardKey}_sign_${idx}`}
            icon={getSignIcon(item)}
            size="2x"
          />
        ))}
      </div>
      <div className="bm-des-area position-absolute d-flex justify-content-center align-items-center">
        <div className="flex-column">
          <div className="bm-des-title d-flex justify-content-center">
            {title}
          </div>
          {subtitle.map((item, idx) => (
            <div
              key={`${cardKey}_subtitle_${idx}`}
              className="d-flex justify-content-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="bm-but-area position-absolute d-flex justify-content-center align-items-center">
        <button className="bm-card-btn">Generate</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardKey: PropTypes.string,
  sign: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  subtitle: PropTypes.arrayOf(PropTypes.string)
};

export default Card;
