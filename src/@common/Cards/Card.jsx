import React from "react";
import "./card.scss";
import link from "../../assets/images/link.png";
import Avatar from 'react-avatar';

export default function Card(props) {
  const {val} = props;
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div className="avatar">
            <span style={{color:"#6548EE"}} className="material-symbols-outlined">business_center</span>
          </div>
          <div className="header-content">
            <div className="title">{val?.nameOfAsessment || "Math Assessment"}</div>
            <div className="meta">
              <div className="meta-item">
                <div className="meta-icon"></div>
                <div className="meta-text">Job</div>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                <span style={{fontSize:"12px", marginRight:"2px", color:"#1C4980"}} className="material-symbols-outlined">calendar_month</span>
                <div className="meta-text">20 Apr 2023</div>
              </div>
            </div>
          </div>
        </div>

        <div className="action-icon">
          <span className="material-symbols-outlined">more_vert</span>
        </div>
      </div>
      <div className="divider"></div>

      <div className="card-footer">
        <div className="d-flex">
        <div className="footer-item">
          <div className="footer-value">{val?.durationOfAsessment || "00"}</div>
          <div className="footer-label">Duration</div>
        </div>
        <div style={{marginLeft:"12px"}} className="footer-item">
          <div className="footer-value">00</div>
          <div className="footer-label">Questions</div>
        </div>
        </div>

        <div className="footer-actions">
          <div className="action-button">
            <img src={link} />
            <div className="action-text">Share</div>
          </div>
          <Avatar className="avatar-actions" name="L P" size="30" round={true} />
        </div>
      </div>
    </div>
  );
}
