import React from "react";
import "./newAssesmentCard.scss";
import { newAssesmentCardData } from "../../constant/constant";

export default function NewAssesmentCard(props) {
  const {openModal} = props;
  return (
    <div onClick={()=> openModal()} className="assessment-card">
      <div className="content">
        <div className="avatar">
          <span style={{color:"#0073E6", fontSize:"44px"}} className="material-symbols-outlined">add</span>
        </div>
        <div className="title">{newAssesmentCardData.title}</div>
        <div className="description">
          {newAssesmentCardData.description}
        </div>
      </div>
    </div>
  );
}
