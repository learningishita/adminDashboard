import React from "react";
import cut from "../../assets/images/cut.svg";
import "./hamBurgerMenu.scss";
import dashboard_sidebar from "../../assets/images/dashboard_sidebar.svg";
import note_alt from "../../assets/images/note_alt.svg";
import quiz from "../../assets/images/quiz.svg";
import admin_meds from "../../assets/images/admin_meds.svg";
import {roundStatus } from "../../constant/constant";

const NavigationItems = (props) => {
  const { image, text, alt, selected} = props;
  return (
    <div
      style={{
        display: "flex",
        height: "50px",
        padding: "10px",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "10px",
        alignSelf: "stretch",
        flexDirection: "row",
        width:"100%"
      }}
    >
      <img src={image} alt={alt} />
      <p
        style={{
          color: `${selected ? "#0073E6" : "#1C4980"}`,
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "140%",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default function HamBurgerMenu(props) {
  const { setToggleHamBurgerMenu } = props;
  return (
    <div className="menu-container">
      <section className="menu-first-section">
        <div className="menu-text">Menu</div>
        <img
          style={{ width: "24px", height: "24px" }}
          onClick={() => setToggleHamBurgerMenu(false)}
          src={cut}
          alt="close"
        />
      </section>

      <section style={{width:"90%"}} className="sidebar-section-one">
        <NavigationItems
          image={dashboard_sidebar}
          alt={"dashboard"}
          text={"Dashboard"}
        />
        <NavigationItems
          selected={true}
          image={note_alt}
          alt={"note"}
          text={"Assessment"}
        />
        <NavigationItems image={quiz} alt={"quiz"} text={"My Library"} />
      </section>

      <section style={{width:"100%"}} className="d-flex-jc-al">
        <div style={{width:"100%"}} className="horizontal-dotted-line"></div>
      </section>

      <section style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%"}} className="section-admin">
        <div style={{display:"flex", flexDirection:"row", width:"100%"}} className="section-round-status">
          <img src={admin_meds} alt="Medsimg" />
          <p style={{marginLeft:"8px"}} className="round-status">{roundStatus}</p>
        </div>

        <div class="badge">
          <div class="badge-text">Admin</div>
        </div>
      </section>
    </div>
  );
}
