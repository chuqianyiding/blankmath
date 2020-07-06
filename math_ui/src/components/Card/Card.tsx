import React from "react";
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

const getSignIcon = (sign:string) => {
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

interface CardProps {
  cardKey: string;
  sign: string[];
  title:string;
  subtitle: string[];
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Card: React.FC<CardProps> = ({ cardKey, sign, title, subtitle, onClick }:CardProps) => {
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
        <button className="bm-card-btn" onClick={onClick}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default Card;
