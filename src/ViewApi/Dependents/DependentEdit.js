import React, { useEffect, useState } from "react";
import dependentApi from "../../api/dependentApi";

export default function DependentEdit(props) {
  const [dependent, setDependent] = useState([]);

  const dependentId = async () => {
    await dependentApi.findOne(props.id.depentId).then((data) => {
      setDependent(data);
    });
  };

  useEffect(() => {
    dependentId();
  }, []);

  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <div>
          <label>Dependent Id : </label>
          <input
            type="text"
            defaultValue={dependent.dependent_id}
            onChange={props.handleChange("dependent_id")}
            disabled
          />
        </div>

        <div>
          <label>First Name : </label>
          <input
            type="text"
            defaultValue={dependent.first_name}
            onChange={props.handleChange("first_name")}
          />
        </div>

        <div>
          <label>Last Name : </label>
          <input
            type="text"
            defaultValue={dependent.last_name}
            onChange={props.handleChange("last_name")}
          />
        </div>

        <div>
          <label>Relationship : </label>
          <input
            type="text"
            defaultValue={dependent.relationship}
            onChange={props.handleChange("relationship")}
          />
        </div>

        <div>
          <label>Employee Id : </label>
          <input
            type="text"
            defaultValue="Employee Id"
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
