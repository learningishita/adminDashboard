import React from "react";
import "./sidebar.scss";
import dashboard_sidebar from "../../assets/images/dashboard_sidebar.svg";
import note_alt from "../../assets/images/note_alt.svg";
import quiz from "../../assets/images/quiz.svg";
import admin_meds from "../../assets/images/admin_meds.svg";
import SidebarNavigation from "../../@components/SidebarNavigation/SidebarNavigation";
import {roundStatus } from "../../constant/constant";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <section className="sidebar-section-one">
        <SidebarNavigation
          image={dashboard_sidebar}
          alt={"dashboard"}
          text={"Dashboard"}
        />
        <SidebarNavigation selected={true} image={note_alt} alt={"note"} text={"Assessment"} />
        <SidebarNavigation image={quiz} alt={"quiz"} text={"My Library"} />
      </section>

      <section className="d-flex-jc-al">
        <div className="horizontal-dotted-line"></div>
      </section>

      <section className="section-admin">
        <div class="badge">
          <div class="badge-text">Admin</div>
        </div>

        <div className="section-round-status">
          <img src={admin_meds} alt="Meds" />
          <p className="round-status">{roundStatus}</p>
        </div>
      </section>
    </div>
  );
}
