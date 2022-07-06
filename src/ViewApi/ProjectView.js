import React, { useState, useEffect } from "react";
import projectApi from "../api/projectApi";

export default function ProjectView() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    projectApi.listProject().then((data) => {
      setProject(
        data.sort(function (a, b) {
          return a.proj_id - b.proj_id;
        })
      );
    });
  }, []);

  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center" }}>List Project</h2>
        {
          <>
            <table>
              <thead>
                <tr>
                  <th>Project Id</th>
                  <th>Proj Name</th>
                  <th>Proj Create</th>
                  <th>Proj Date</th>
                  <th>Proj Cust Name</th>
                  <th>Proj Customer</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {project &&
                  project.map((proj) => (
                    <tr key={proj.proj_id}>
                      <td>{proj.proj_id}</td>
                      <td>{proj.proj_name}</td>
                      <td>{proj.proj_createdon}</td>
                      <td>{proj.proj_duedate}</td>
                      <td>{proj.proj_status}</td>
                      <td>{proj.proj_customer}</td>
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
