import React, { useState, useEffect } from "react";
import employeeApi from "../../api/employeeApi";
import EmployeeAdd from "./EmployeeAdd";
import EmployeeEdit from "./EmployeeEdit";
import config from "../../config/config";

export default function EmployeeView() {
  const [employee, setEmployee] = useState([]);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();

  const employees = async () => {
    employeeApi.listEmployee().then((data) => {
      setEmployee(
        data.sort(function (a, b) {
          return a.employee_id - b.employee_id;
        })
      );
    });
  };

  useEffect(() => {
    employees();
  }, []);

  const onEdit = async (id) => {
    setDisplayEdit(true);
    setId(id);
  };
  const onDeleted = async (id) => {
    window.confirm(`You sure deleted Data ?`)
      ? await employeeApi.deletedEmployee(id).then(() => {
          employees();
        })
      : employees();
  };
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center" }}>List Employee</h2>
        <button
          onClick={() => {
            setDisplay(true);
          }}
        >
          Add Employee
        </button>
        {displayEdit ? (
          <EmployeeEdit
            setDisplay={setDisplayEdit}
            refresh={() => {
              employees();
            }}
            closeAdd={() => {
              setDisplayEdit(false);
            }}
            id={id}
          />
        ) : display ? (
          <EmployeeAdd
            setDisplay={setDisplay}
            closeAdd={() => {
              setDisplay(false);
            }}
            refresh={() => {
              employees();
            }}
          />
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Employee Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Hire Date</th>
                  <th>Salary</th>
                  <th>Department Id</th>
                  <th>Job Id</th>
                  <th>Manager Id</th>
                  <th>Profile</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {employee.map((emp) => (
                  <tr key={emp.employee_id}>
                    <td>{emp.employee_id}</td>
                    <td>{emp.first_name}</td>
                    <td>{emp.last_name}</td>
                    <td>{emp.email}</td>
                    <td>
                      {emp.phone_number == null
                        ? `Not Found`
                        : emp.phone_number}
                    </td>
                    <td>{emp.hire_date}</td>
                    <td>{emp.salary}</td>
                    <td>{emp.department_id}</td>
                    <td>{emp.job_id}</td>
                    <td>{emp.manager_id}</td>
                    <td>
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
                    <td>
                      <button
                        onClick={() => {
                          onDeleted(emp.employee_id);
                        }}
                      >
                        Deleted
                      </button>
                      <button
                        style={{ marginLeft: "5px" }}
                        onClick={() => {
                          onEdit(emp.employee_id);
                        }}
                      >
                        Edit Employee
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}
