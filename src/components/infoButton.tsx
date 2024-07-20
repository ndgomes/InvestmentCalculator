import { useState } from "react";
import InfoIcon from "../assets/info.svg";
import UpIcon from "../assets/up.svg";
import DownIcon from "../assets/down.svg";

export const InfoButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="info-center-button">
      <button className="infoButton" onClick={() => setOpen(!open)}>
        <img src={InfoIcon} alt="Info icon" />
        How it works
        {open ? (
          <img className="toggleIcon" src={UpIcon} alt="Up icon" />
        ) : (
          <img className="toggleIcon" src={DownIcon} alt="Down icon" />
        )}
      </button>

      {open && (
        <div className="infoContent">
          <p style={{ marginTop: "2rem" }}>
            <span className="infoContent-title">Initial Investment:</span> The
            sum of money you start with, for example, €1,000.
          </p>
          <p>
            <span className="infoContent-title">Monthly Investment:</span> The
            amount you put in each month for instance €250.
          </p>
          <p>
            <span className="infoContent-title">Interest Rate Yearly:</span> The
            annual interest percentage such as 6%.
          </p>
          <p>
            <span className="infoContent-title">Duration (Years):</span> The
            length of time the investment will run like 5 years.
          </p>
          <p className="infoContent-title" style={{ marginTop: "2rem" }}>
            Calculation per Each Year:
          </p>
          <p>
            <span className="infoContent-title">Intrest:</span> This is done on
            the total value invested in.
          </p>
          <p>
            <span className="infoContent-title">Total Value:</span> Amount
            Initially Invested plus Interest Earned
          </p>
          <p className="infoContent-title" style={{ marginTop: "1rem" }}>
            Examples:
          </p>
          <p>
            <span className="infoContent-title">Year 1:</span> Initial + Monthly
            Contributions: €4,000
          </p>{" "}
          <p>
            <span className="infoContent-title">Annually Interest:</span> €60
          </p>
          <p>
            <span className="infoContent-title">Total Value:</span> €4,060
          </p>{" "}
          <p style={{ marginTop: "1rem" }}>
            <span className="infoContent-title">Year 5:</span> Initial + Monthly
            Contributions: €16,000
          </p>{" "}
          <p>
            <span className="infoContent-title">Annually Interest:</span> €2,250
          </p>{" "}
          <p>
            <span className="infoContent-title">Total Value:</span> €18,250
          </p>{" "}
          <p style={{ marginTop: "2rem" }}>
            This process continues for the specified duration showing how your
            investment grows annually.
          </p>
        </div>
      )}
    </div>
  );
};
