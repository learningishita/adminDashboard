import React from "react";
import ".././AssesmentOverview/assesmentOverview.scss";

export default function AssesmentTotal(props) {
  const { title, value, iconUsed } = props;
  return (
    <div className="overview-section">
      <div className="section-title">{title}</div>
      <div className="section-content">
        <div className="icon-container">
            {iconUsed}
        </div>
        <div className="section-value">{value}</div>
      </div>
    </div>
  );
}
