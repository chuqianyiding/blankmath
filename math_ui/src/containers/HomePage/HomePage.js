import React from "react";
import "./HomePage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faGreaterThanEqual,
  faTimes,
  faDivide
} from "@fortawesome/free-solid-svg-icons";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import bee from "../../img/bee-705412.svg";
import Card from "../../components/Card";

const cardData = [
  {
    cardKey: "additionCard",
    sign: ["plus"],
    title: "Addition",
    subtitle: ["12 + 9 = ?", "2 + 8 = ?"]
  },
  {
    cardKey: "mnAdditionCard",
    sign: ["plus"],
    title: "Missing Number",
    subtitle: ["7 + ? = 15", "? + 3 = 12"]
  },
  {
    cardKey: "tnpAdditionCard",
    sign: ["plus"],
    title: "Three Number",
    subtitle: ["7 + 8 + 12 = ?", "2 + 3 + 4 = ?"]
  },
  {
    cardKey: "minusCard",
    sign: ["minus"],
    title: "Minus",
    subtitle: ["12 - 9 = ?", "8 - 2 = ?"]
  },
  {
    cardKey: "mnMinusCard",
    sign: ["minus"],
    title: "Missing Number",
    subtitle: ["7 - ? = 5", "? - 3 = 12"]
  },
  {
    cardKey: "tnpAdditionMinusCard",
    sign: ["plus", "minus"],
    title: "Three Number",
    subtitle: ["17 - 8 + 7 = ?", "8 + 3 - 4 = ?"]
  },
  {
    cardKey: "timesCard",
    sign: ["times"],
    title: "Multiplication",
    subtitle: ["8 * 9 = ?", "2 * 3 = ?"]
  },
  {
    cardKey: "mnTimesCard",
    sign: ["times"],
    title: "Missing Number",
    subtitle: ["8 * ? = 72", "2 * ? = 6"]
  },
  {
    cardKey: "comparisionCard",
    sign: ["greaterThan", "lessThan"],
    title: "Comparision",
    subtitle: ["7 > 8 or 7 < 8 ?", "12 > 2 or 12 < 2 ?"]
  },
  {
    cardKey: "divisionCard",
    sign: ["divide"],
    title: "Division",
    subtitle: ["8 / 2 = ?", "12 / 4 = ?"]
  },
  {
    cardKey: "mnDivisionCard",
    sign: ["divide"],
    title: "Missing Number",
    subtitle: ["8 / ? = 2", "12 / ? = 3"]
  }
];
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
