import React, { useState } from "react";
import "./topbar.scss";
import segment from "../../assets/images/segment.svg";
import laptop_mac from "../../assets/images/laptop_mac.svg";
import HamBurgerMenu from "../../@components/HamBurgerMenu/HamBurgerMenu";

export default function Topbar() {
  const [toggleHamBurgerMenu, setToggleHamBurgerMenu] = useState(false);

  return (
    <>
      <div className="header-mobile-container">
        <section className="header-mobile-section">
          <div onClick={()=> setToggleHamBurgerMenu(true)} className="header-mobile-img">
            <img src={segment} alt="segment" />
          </div>
          <h1 className="header-mobile-heading">Assessment</h1>
        </section>

        {
          toggleHamBurgerMenu && <HamBurgerMenu setToggleHamBurgerMenu={setToggleHamBurgerMenu} />
        }

        <section className="header-mobile-section">
          <img src={laptop_mac} alt="laptop" />
        </section>
      </div>

      <div className="mobile-my-asessment">
        <div
          style={{ borderBottom: "2px solid #0073E6" }}
          className="asessment-mobile"
        >
          <p style={{color:"#0073E6"}} className="mobile-asessment-text">My Assessments</p>
        </div>
        <div className="asessment-mobile">
          <p className="mobile-asessment-text">Unstop Assessments</p>
        </div>
      </div>

      <div className="container-topbar">
        <div className="left-section">
          <div className="tab-one">Assessment</div>
          <div className="divider"></div>
          <div className="actions">
            <div className="tab-two">
              <div className="tab-two-text">My Assessments</div>
            </div>
          </div>
        </div>
        <div className="avatar">
          <div className="icon-container">
            <div className="icon">
              <span className="material-symbols-outlined">smartphone</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
