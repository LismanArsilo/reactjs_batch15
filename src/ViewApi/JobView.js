import React, { useState, useEffect } from "react";
import jobApi from "../api/jobApi";

export default function JobView() {
  const [job, setJob] = useState([]);

  useEffect(() => {
    jobApi.listJob().then((data) => {
      setJob(data);
    });
  }, []);
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center" }}>List Job</h2>
        {
          <>
            <table>
              <thead>
                <tr>
                  <th>Job Id</th>
                  <th>Job Title</th>
                  <th>Min - Salary</th>
                  <th>Max - Salary</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {job &&
                  job.map((job) => (
                    <tr key={job.job_id}>
                      <td>{job.job_id}</td>
                      <td>{job.job_title}</td>
                      <td>{job.min_salary}</td>
                      <td>{job.max_salary}</td>
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
