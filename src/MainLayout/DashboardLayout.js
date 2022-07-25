import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Region", href: "region" },
  { name: "Country", href: "country" },
  { name: "Location", href: "location" },
  { name: "Employee", href: "employee" },
];

export default function DashboardLayout() {
  return (
    <div>
      <div className=" bg-purple-700 p-3 flex items-end shadow-lg shadow-button fixed w-full">
        <div className=" p-4 border border-slate-700 items-center mr-5 bg-purple-900 animate-spin hover:ease-in-out shadow-lg shadow-button"></div>
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
      <main className="pt-20 pb-5">
        {/* Page title & actions */}
        <Outlet />
      </main>
    </div>
  );
}
