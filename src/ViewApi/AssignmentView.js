import React, { useEffect, useState } from "react";
import assignmentApi from "../api/assignmentApi";

export default function AssignmentView() {
  const [assignment, setAssignment] = useState([]);

  useEffect(() => {
    assignmentApi.listAssignment().then((data) => {
      setAssignment(
        data.sort(function (a, b) {
          return a.pras_proj_id - b.pras_proj_id;
        })
      );
    });
  }, []);
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center" }}>List Assignment</h2>
        {
          <>
            <table>
              <thead>
                <tr>
                  <th>Pras Proj Id</th>
                  <th>Pras Employee Id</th>
                  <th>Pras Start Date</th>
                  <th>Pras End Date</th>
                  <th>Pras Status</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {assignment &&
                  assignment.map((proj) => (
                    <tr key={proj.pras_proj_id}>
                      <td>{proj.pras_proj_id}</td>
                      <td>{proj.pras_employee_id}</td>
                      <td>{proj.pras_startdate}</td>
                      <td>{proj.pras_enddate}</td>
                      <td>{proj.pras_status}</td>
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
