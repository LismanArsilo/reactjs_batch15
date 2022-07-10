import React from "react";

export default function DependentAdd(props) {
  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <div>
          <label>Dependent Id : </label>
          <input
            type="text"
            placeholder="Dependent Id"
            onChange={props.handleChange("dependent_id")}
          />
        </div>

        <div>
          <label>First Name : </label>
          <input
            type="text"
            placeholder="First Name"
            onChange={props.handleChange("first_name")}
          />
        </div>

        <div>
          <label>Last Name : </label>
          <input
            type="text"
            placeholder="Last Name"
            onChange={props.handleChange("last_name")}
          />
        </div>

        <div>
          <label>Relationship : </label>
          <input
            type="text"
            placeholder="Relationship"
            onChange={props.handleChange("relationship")}
          />
        </div>

        <div>
          <label>Employee Id : </label>
          <input
            type="text"
            placeholder="Employee Id"
            onChange={props.handleChange("employee_id")}
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
