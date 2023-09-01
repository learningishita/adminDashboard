import React from "react";
import "./SidebarNavigation.scss";

export default function SidebarNavigation(props) {
  const { image, text, alt, selected } = props;
  return (
    <div
      className={`sidebar-navigation-container ${selected && "selected-tab"}`}
    >
      <img src={image} alt={alt} />
      <p className="sidebar-navigation-text">{text}</p>
    </div>
  );
}
