import React, { useState, useEffect } from "react";
import departmentApi from "../api/departmentApi";

export default function DepartmentView() {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    departmentApi.listDepartment().then((data) => {
      setDepartment(
        data.sort(function (a, b) {
          return a.department_id - b.department_id;
        })
      );
    });
  }, []);

  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center" }}>List Department</h2>
        {
          <>
            <table>
              <thead>
                <tr>
                  <th>Department Id</th>
                  <th>Depart Name</th>
                  <th>Loc Id</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {department &&
                  department.map((depart) => (
                    <tr key={depart.department_id}>
                      <td>{depart.department_id}</td>
                      <td>{depart.department_name}</td>
                      <td>{depart.location_id}</td>
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
