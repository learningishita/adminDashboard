import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import Dashboard from "../pages/Dashboard/Dashboard";
import "./layout.scss";

export default function Layout() {
  return (
    <div className="layout-container">
      <div className="layout-sidebar">
        <Sidebar />
      </div>

      <div className="layout-topbar-dashboard">
        <div className="layout-topbar">
          <Topbar />
        </div>

        <div className="layout-dashboard">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
