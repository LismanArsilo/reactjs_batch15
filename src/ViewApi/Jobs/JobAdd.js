import React from "react";

export default function JobAdd(props) {
  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <div>
          <label>Job Id : </label>
          <input
            type="text"
            placeholder="Job Id"
            onChange={props.handleChange("job_id")}
          />
        </div>

        <div>
          <label>Min Salary : </label>
          <input
            type="text"
            placeholder="Min Salary"
            onChange={props.handleChange("min_salary")}
          />
        </div>

        <div>
          <label>Max Salary : </label>
          <input
            type="text"
            placeholder="Max Salary"
            onChange={props.handleChange("max_salary")}
          />
        </div>

        <div>
          <label>Job Title : </label>
          <input
            type="text"
            placeholder="Job Title"
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
