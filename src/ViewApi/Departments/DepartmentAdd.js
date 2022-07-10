import React from "react";

export default function DepartmentAdd(props) {
  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <div>
          <label>Department Id : </label>
          <input
            type="text"
            placeholder="Department Id"
            onChange={props.handleChange("department_id")}
          />
        </div>

        <div>
          <label>Department Name : </label>
          <input
            type="text"
            placeholder="Department Name"
            onChange={props.handleChange("department_name")}
          />
        </div>

        <div>
          <label>Location Id : </label>
          <input
            type="text"
            placeholder="Location Id"
            onChange={props.handleChange("location_id")}
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
