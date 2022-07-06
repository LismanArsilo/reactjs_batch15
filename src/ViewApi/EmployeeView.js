import React, { useState, useEffect } from "react";
import employeeApi from "../api/employeeApi";

export default function EmployeeView() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    employeeApi.listEmployee().then((data) => {
      setEmployee(
        data.sort(function (a, b) {
          return a.employee_id - b.employee_id;
        })
      );
    });
  }, []);
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center" }}>List Employee</h2>
        {
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
                  <th>Job Id</th>
                  <th>Salary</th>
                  <th>Manager Id</th>
                  <th>Department Id</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {employee &&
                  employee.map((emp) => (
                    <tr key={emp.employee_id}>
                      <td>{emp.employee_id}</td>
                      <td>{emp.first_name}</td>
                      <td>{emp.last_name}</td>
                      <td>{emp.email}</td>
                      <td>{emp.phone_number}</td>
                      <td>{emp.hire_date}</td>
                      <td>{emp.job_id}</td>
                      <td>{emp.salary}</td>
                      <td>{emp.manager_id}</td>
                      <td>{emp.department_id}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        }
      </div>
    </div>
  );
}
