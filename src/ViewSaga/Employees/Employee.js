import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import config from "../../config/config";
import {
  GetEmployeeRequest,
  DelEmployeeRequest,
} from "../../Redux-Saga/Action/EmployeeAction";
import EmployeeDetail from "./EmployeeDetail";

export default function Employee() {
  const [display, setDisplay] = useState(false);
  const [id, setId] = useState();
  const dispatch = useDispatch();
  const { employees } = useSelector((state) => state.employeeStated);

  useEffect(() => {
    dispatch(GetEmployeeRequest());
  }, []);

  const onDeleted = async (id) => {
    dispatch(DelEmployeeRequest(id));
  };

  const onEdit = async (id) => {
    setDisplay(true);
    setId(id);
  };

  return (
    <div className="container max-w-full">
      {display ? (
        <EmployeeDetail id={id} closeAdd={() => setDisplay(false)} />
      ) : (
        <div>
          <h2 className="py-3 text-center text-xl font-bold">
            List Of Employee
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
                <th className="border border-slate-600 py-2 bg-gray-300">
                  Profile
                </th>
                <th className="border border-slate-600 py-2 bg-gray-300">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(employees)
                ? employees &&
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
                      <td className="border border-slate-700 py-2">
                        {emp.email}
                      </td>
                      <td className="border border-slate-700 py-2">
                        {emp.phone_number == null ? (
                          <span className="text-red-500">Not Found</span>
                        ) : (
                          emp.phone_number
                        )}
                      </td>
                      <td className="border border-slate-700 py-2">
                        {emp.hire_date}
                      </td>
                      <td className="border border-slate-700 py-2">
                        {emp.salary}
                      </td>
                      <td className="border border-slate-700 py-2">
                        {emp.emp_profile == null ? (
                          <span className="text-red-500">Not Profile</span>
                        ) : (
                          <img
                            className="m-auto"
                            crossOrigin="anonymous"
                            src={`${config.domain}/employee/file/${emp.emp_profile}`}
                            alt="images"
                            width={100}
                          ></img>
                        )}
                      </td>
                      <td className="border border-slate-400">
                        <button
                          className="px-2 bg-red-400 rounded-2xl font-semibold hover:bg-red-600 ring-2 ring-red-400 "
                          onClick={() => {
                            if (window.confirm("Delete this record")) {
                              onDeleted(emp.employee_id);
                            }
                          }}
                        >
                          Deleted
                        </button>
                        <Link
                          to={`edit/${emp.employee_id}`}
                          className="px-4 bg-green-400 rounded-2xl font-semibold hover:bg-green-600 ring-2 ring-green-400 mx-2"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => {
                            onEdit(emp.employee_id);
                          }}
                          className="px-2 bg-blue-400 rounded-2xl font-semibold hover:bg-blue-600 mr-2 ring-2 ring-blue-400"
                        >
                          Detail
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
