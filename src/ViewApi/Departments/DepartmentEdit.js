import React, { useEffect, useState } from "react";
import departmentApi from "../../api/departmentApi";

export default function DepartmentEdit(props) {
  const [department, setDepartment] = useState([]);

  const departmentId = async () => {
    await departmentApi.findOne(props.id.departId).then((data) => {
      setDepartment(data);
    });
  };

  useEffect(() => {
    departmentId();
  }, []);

  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <div>
          <label>Department Id : </label>
          <input
            type="text"
            defaultValue={department.department_id}
            onChange={props.handleChange("department_id")}
            disabled
          />
        </div>

        <div>
          <label>Department Name : </label>
          <input
            type="text"
            defaultValue={department.department_name}
            onChange={props.handleChange("department_name")}
          />
        </div>

        <div>
          <label>Location Id : </label>
          <input
            type="text"
            defaultValue={department.location_id}
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
