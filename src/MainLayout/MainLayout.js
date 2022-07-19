import React from "react";
import { Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="navbar">
      <h2 style={{ textAlign: "center" }}>Main Layout</h2>
      <ul className="navigasi">
        <Link className="layout" to="/region">
          Regions
        </Link>
        <Link className="layout" to="/country">
          Countries
        </Link>
        {/* <Link className="layout" to="/country">
          Country
        </Link>
        <Link className="layout" to="/location">
          Location
        </Link>
        <Link className="layout" to="/department">
          Department
        </Link>
        <Link className="layout" to="/employee">
          Employees
        </Link> */}
      </ul>
    </div>
  );
}
