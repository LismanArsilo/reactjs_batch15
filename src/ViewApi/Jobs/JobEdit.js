import React, { useEffect, useState } from "react";
import jobApi from "../../api/jobApi";

export default function JobEdit(props) {
  const [job, setJob] = useState([]);

  const jobId = async () => {
    await jobApi.findOne(props.id.jobId).then((data) => {
      setJob(data);
    });
  };
  useEffect(() => {
    jobId();
  }, []);

  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <div>
          <label>Job Id : </label>
          <input
            type="text"
            defaultValue={job.job_id}
            onChange={props.handleChange("job_id")}
            disabled
          />
        </div>

        <div>
          <label>Min Salary : </label>
          <input
            type="text"
            defaultValue={job.min_salary}
            onChange={props.handleChange("min_salary")}
          />
        </div>

        <div>
          <label>Max Salary : </label>
          <input
            type="text"
            defaultValue={job.max_salary}
            onChange={props.handleChange("max_salary")}
          />
        </div>

        <div>
          <label>Job Title : </label>
          <input
            type="text"
            defaultValue={job.job_title}
            onChange={props.handleChange("job_title")}
          />
        </div>

        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
