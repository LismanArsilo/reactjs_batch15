import React, { useState, useEffect } from "react";
import dependentApi from "../api/dependentApi";

export default function DependentView() {
  const [dependent, setDependent] = useState([]);

  useEffect(() => {
    dependentApi.listDependent().then((data) => {
      setDependent(
        data.sort(function (a, b) {
          return a.dependent_id - b.dependent_id;
        })
      );
    });
  }, []);
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center" }}>List Dependent</h2>
        {
          <>
            <table>
              <thead>
                <tr>
                  <th>Dependent Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Relationship</th>
                  <th>Employee Id</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {dependent &&
                  dependent.map((depen) => (
                    <tr key={depen.dependent_id}>
                      <td>{depen.dependent_id}</td>
                      <td>{depen.first_name}</td>
                      <td>{depen.last_name}</td>
                      <td>{depen.relationship}</td>
                      <td>{depen.employee_id}</td>
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
