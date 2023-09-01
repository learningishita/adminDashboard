import React from "react";
import ".././AssesmentOverview/assesmentOverview.scss";

export default function AssesmentCandidates(props) {
  const { title, data, iconUsed } = props;
  return (
    <div className="overview-section">
      <div className="section-title">{title}</div>
      <div style={{paddingRight:"15px"}} className="section-content">
        <div className="icon-container">
          <div className="icon">{iconUsed}</div>
        </div>

        {data?.map((val, idx) => {
          return (
            <div className="section-data-container" key={idx}>
              <div style={{paddingLeft:`${idx === 0 ? '10px' : '20px'}`}} className="section-data">
                <div className="data-value-flex">
                  <div className="data-value">{val?.value}</div>
                  <div className="data-increase">+{val?.valueIncrease}</div>
                </div>
                <div className="data-label">{val?.dataLabel}</div>
              </div>
              {idx !== data.length - 1 && (
                <div style={{marginLeft:"20px"}} className="section-divider"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* <div className="section-data">
        <div className="data-value">145</div>
        <div className="data-increase">+89</div>
        <div className="data-label">Social Share</div>
      </div>
      <div className="section-divider"></div>
      <div className="section-data">
        <div className="data-value">145</div>
        <div className="data-increase">+89</div>
        <div className="data-label">Unique Link</div>
      </div> */}
    </div>
  );
}
