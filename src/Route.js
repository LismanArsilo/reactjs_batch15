import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./MainLayout/DashboardLayout";
import RegionView from "./ViewSaga/Regions/Region";
import CountryView from "./ViewSaga/Countries/Country";
import EmployeeView from "./ViewSaga/Employees/Employee";
import LocationView from "./ViewSaga/Locations/Location";
import RegionAdd from "./ViewSaga/Regions/RegionAdd";
import CountryAdd from "./ViewSaga/Countries/CountryAdd";
import EmployeeAdd from "./ViewSaga/Employees/EmployeeAdd";
import LocationAdd from "./ViewSaga/Locations/LocationAdd";
import RegionEdit from "./ViewSaga/Regions/RegionEdit";
import CountryEdit from "./ViewSaga/Countries/CountryEdit";
import EmployeeEdit from "./ViewSaga/Employees/EmployeeEdit";
import LocationEdit from "./ViewSaga/Locations/LocationEdit";

export default function Route() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "region", element: <RegionView /> },
        { path: "region/add", element: <RegionAdd /> },
        { path: "region/edit/:id", element: <RegionEdit /> },
        { path: "country", element: <CountryView /> },
        { path: "country/add", element: <CountryAdd /> },
        { path: "country/edit/:id", element: <CountryEdit /> },
        { path: "employee", element: <EmployeeView /> },
        { path: "employee/add", element: <EmployeeAdd /> },
        { path: "employee/edit/:id", element: <EmployeeEdit /> },
        { path: "location", element: <LocationView /> },
        { path: "location/add", element: <LocationAdd /> },
        { path: "location/edit/:id", element: <LocationEdit /> },
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
