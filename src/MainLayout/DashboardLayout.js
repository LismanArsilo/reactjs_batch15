import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Region", href: "region" },
  { name: "Country", href: "country" },
  { name: "Employee", href: "employee" },
];

export default function DashboardLayout() {
  return (
    <div className="container max-w-full">
      <div className=" bg-purple-700 p-3 flex items-end">
        <h2 className="text-3xl pr-5 font-semibold text-lime-50">🤞</h2>
        <div>
          {navigation.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className="text-xl mr-4 text-lime-50 hover:text-2xl duration-300 ease-in-out "
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      <main>
        {/* Page title & actions */}
        <Outlet />
      </main>
    </div>
  );
}
