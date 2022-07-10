import React, { useState, useEffect } from "react";
import jobApi from "../../api/jobApi";
import JobAdd from "./JobAdd";

export default function JobView() {
  const [job, setJob] = useState([]);
  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState({
    job_id: undefined,
    min_salary: undefined,
    max_salary: undefined,
    job_title: undefined,
  });

  useEffect(() => {
    jobs();
  }, []);

  const jobs = async () => {
    await jobApi.listJob().then((data) => {
      setJob(
        data.sort((a, b) => {
          return a.job_id - b.job_id;
        })
      );
    });
  };

  const onDeleted = async (id) => {
    window.confirm(`You sure deleted Data ?`)
      ? await jobApi.deletedJob(id).then(() => {
          jobs();
        })
      : jobs();
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSubmit = async () => {
    const payload = {
      job_id: values.job_id,
      min_salary: values.min_salary,
      max_salary: values.max_salary,
      job_title: values.job_title,
    };
    await jobApi.createJob(payload).then(() => {
      window.alert(`Data Successfuly Insert`);
      jobs();
    });
    setDisplay(false);
  };

  return (
    <div>
      <div>
        <h2>List Job</h2>
        <button
          onClick={() => {
            setDisplay(true);
          }}
        >
          Add Job
        </button>
        {display ? (
          <JobAdd
            onSubmitForm={onSubmit}
            handleChange={handleChange}
            setDisplay={setDisplay}
          />
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Job Id</th>
                  <th>Min - Salary</th>
                  <th>Max - Salary</th>
                  <th>Job Title</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {job &&
                  job.map((job) => (
                    <tr key={job.job_id}>
                      <td>{job.job_id}</td>
                      <td>{job.min_salary}</td>
                      <td>{job.max_salary}</td>
                      <td>{job.job_title}</td>
                      <button
                        onClick={() => {
                          onDeleted(job.job_id);
                        }}
                      >
                        Deleted
                      </button>
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
