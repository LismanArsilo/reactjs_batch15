import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOneEmployeeRequest } from "../../Redux-Saga/Action/EmployeeAction";
import config from "../../config/config";

export default function EmployeeDetail(props) {
  const dispatch = useDispatch();
  const { employee } = useSelector((state) => state.employeeStated);

  useEffect(() => {
    dispatch(GetOneEmployeeRequest(props.id));
  }, []);
  return (
    <div className=" container m-auto pt-5 w-3/12">
      <div className="outline-double outline-button pt-10 rounded-xl shadow-2xl ">
        <div>
          {employee.emp_profile ? (
            <img
              className="m-auto mb-5"
              src={`${config.domain}/employee/file/${employee.emp_profile}`}
              width={200}
              crossOrigin="anonymous"
            ></img>
          ) : (
            <div className="h-32 m-auto pt-[3.2rem] border border-slate-900 rounded-lg mb-5 w-44">
              <p className="text-center w-24 m-auto text-red-600">
                Not Profile
              </p>
            </div>
          )}
        </div>
        <h2 className="text-left ml-7  font-semibold">
          Name :
          <span className="ml-5">
            {employee.first_name} {employee.last_name}
          </span>
        </h2>
        <h2 className="text-left ml-7 mt-1 font-semibold">
          Email : <span className="ml-5"> {employee.email}</span>
        </h2>
        <h2 className="text-left ml-7 mt-1 font-semibold">
          Phone : <span className="ml-3">{employee.phone_number}</span>
        </h2>
        <h2 className="text-left ml-7 mt-1 font-semibold">
          Date : <span className="ml-6">{employee.hire_date}</span>
        </h2>
        <h2 className="text-left ml-7 mt-1 font-semibold">
          Salary : <span className="ml-4">{employee.salary}</span>
        </h2>
        <h2 className="text-left ml-7 mt-1 font-semibold">
          Dep Id : <span className="ml-4"> {employee.department_id}</span>
        </h2>
        <h2 className="text-left ml-7 mt-1 font-semibold">
          Job Id : <span className="ml-5">{employee.job_id}</span>
        </h2>
        <h2 className="text-left ml-7 mt-1 font-semibold">
          Mngr Id : <span className="ml-1">{employee.manager_id}</span>
        </h2>
        <div className="text-right pr-4 pt-4 pb-3">
          <button
            onClick={() => props.closeAdd(false)}
            className="bg-button px-3 py-1 ring-1 ring-button font-semibold rounded-2xl hover:bg-purple-700"
          >
            ⩹ back
          </button>
        </div>
      </div>
    </div>
  );
}
