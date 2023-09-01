import React from "react";
import "./assesmentOverview.scss";
import AssesmentTotal from "../AssesmentTotal/AssesmentTotal";
import AssesmentCandidates from "../AssesmentCandidates/AssesmentCandidates";
import { candidatesData } from "../../../constant/constant";

export default function AssesmentOverview() {
  return (
    <div>
      <div className="overview-container">
        <div className="overview-title">Assessments Overview</div>

        <div className="overview-card">
          <AssesmentTotal
            title={"Total Assessment"}
            value={"34"}
            iconUsed={
              <span className="material-symbols-outlined">view_agenda</span>
            }
          />

          <div className="section-divider"></div>

          <AssesmentCandidates
          title={"Candidates"}
          data={candidatesData.candidates}
          iconUsed={<span className="material-symbols-outlined">
          group
          </span>}
          />

          <div className="section-divider"></div>
          <AssesmentCandidates
          title={"Candidates Source"}
          data={candidatesData.candidatesSource}
          iconUsed={<span style={{color:"#E9407A"}} className="material-symbols-outlined">
          captive_portal
          </span>}
          />

          <div className="section-divider"></div>

          <AssesmentTotal
            title={"Total Purpose"}
            value={"11"}
            iconUsed={<span className="material-symbols-outlined">link</span>}
          />
        </div>
      </div>
    </div>
  );
}
