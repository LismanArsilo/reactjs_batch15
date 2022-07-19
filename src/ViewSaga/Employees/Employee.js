import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import config from "../../config/config";
import {
  GetEmployeeRequest,
  DelEmployeeRequest,
} from "../../Redux-Saga/Action/EmployeeAction";

export default function Employee() {
  const dispatch = useDispatch();
  const { employees } = useSelector((state) => state.employeeStated);

  useEffect(() => {
    dispatch(GetEmployeeRequest());
  }, []);

  const onDeleted = async (id) => {
    dispatch(DelEmployeeRequest(id));
  };
  return (
    <div className="container max-w-full">
      <h2
        className="py-3 text-center text-xl font-bold"
        style={{ textAlign: "center" }}
      >
        List Employee
      </h2>
      <Link
        className="ring-2 font-semibold ring-button p-1 rounded-lg bg-button hover:bg-purple-700 ml-2"
        to="add"
      >
        + Add Employee
      </Link>
      <table className="border-collapse border-slate-500 mt-3 w-full mx-1 overflow-x-scroll">
        <thead>
          <tr>
            <th className="border border-slate-600 py-2 bg-gray-300 px-2">
              Employee Id
            </th>
            <th className="border border-slate-600 py-2 bg-gray-300 px-2">
              First Name
            </th>
            <th className="border border-slate-600 py-2 bg-gray-300 px-2">
              Last Name
            </th>
            <th className="border border-slate-600 py-2 bg-gray-300 px-2">
              Email
            </th>
            <th className="border border-slate-600 py-2 bg-gray-300 px-2">
              Phone
            </th>
            <th className="border border-slate-600 py-2 bg-gray-300 px-2">
              Hire Date
            </th>
            <th className="border border-slate-600 py-2 bg-gray-300 px-2">
              Salary
            </th>
            <th className="border border-slate-600 py-2 bg-gray-300 px-2">
              Department Id
            </th>
            <th className="border border-slate-600 py-2 bg-gray-300 px-1">
              Job Id
            </th>
            <th className="border border-slate-600 py-2 bg-gray-300">
              Manager Id
            </th>
            <th className="border border-slate-600 py-2 bg-gray-300">
              Profile
            </th>
            <th className="border border-slate-600 py-2 bg-gray-300">Action</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {employees &&
            employees.map((emp, index) => (
              <tr key={index} className="text-center py-3">
                <td className="border border-slate-700 py-2">
                  {emp.employee_id}
                </td>
                <td className="border border-slate-700 py-2">
                  {emp.first_name}
                </td>
                <td className="border border-slate-700 py-2">
                  {emp.last_name}
                </td>
                <td className="border border-slate-700 py-2">{emp.email}</td>
                <td className="border border-slate-700 py-2">
                  {emp.phone_number == null ? `Not Found` : emp.phone_number}
                </td>
                <td className="border border-slate-700 py-2">
                  {emp.hire_date}
                </td>
                <td className="border border-slate-700 py-2">{emp.salary}</td>
                <td className="border border-slate-700 py-2">
                  {emp.department_id}
                </td>
                <td className="border border-slate-700 py-2">{emp.job_id}</td>
                <td className="border border-slate-700 py-2">
                  {emp.manager_id}
                </td>
                <td className="border border-slate-700 py-2">
                  {emp.emp_profile == null ? (
                    `Not Images`
                  ) : (
                    <img
                      crossOrigin="anonymous"
                      src={`${config.domain}/employee/file/${emp.emp_profile}`}
                      alt="images"
                      width={100}
                    ></img>
                  )}
                </td>
                <td className="border border-slate-700 py-2">
                  <button
                    className="px-2 bg-button rounded-2xl font-semibold hover:bg-purple-700 ring-2 ring-button m-2"
                    onClick={() => {
                      if (window.confirm("Delete this record")) {
                        onDeleted(emp.employee_id);
                      }
                    }}
                  >
                    Deleted
                  </button>
                  <button className="px-6 bg-button rounded-2xl font-semibold hover:bg-purple-700 ring-2 ring-button">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <main>
        {/* Page title & actions */}
        <Outlet />
      </main>
    </div>
  );
}
