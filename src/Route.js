import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import RegionView from "./ViewSaga/Regions/Region";
import CountryView from "./ViewSaga/Countries/Country";
import EmployeeView from "./ViewSaga/Employees/Employee";
import DashboardLayout from "./MainLayout/DashboardLayout";
import RegionAdd from "./ViewSaga/Regions/RegionAdd";
import CountryAdd from "./ViewSaga/Countries/CountryAdd";
import EmployeeAdd from "./ViewSaga/Employees/EmployeeAdd";

export default function Route() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "region", element: <RegionView /> },
        { path: "region/add", element: <RegionAdd /> },
        { path: "country", element: <CountryView /> },
        { path: "country/add", element: <CountryAdd /> },
        { path: "employee", element: <EmployeeView /> },
        { path: "employee/add", element: <EmployeeAdd /> },
      ],
    },
    // {
    //   path: "region",
    //   element: <RegionView />,
    //   children: [{ path: "add", element: <RegionAdd /> }],
    // },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
