import React, { useState, useEffect } from "react";
import departmentApi from "../../api/departmentApi";
import DepartmentAdd from "./DepartmentAdd";

export default function DepartmentView() {
  const [department, setDepartment] = useState([]);
  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState({
    department_id: undefined,
    department_name: undefined,
    location_id: undefined,
  });

  useEffect(() => {
    departments();
  }, []);

  const departments = async () => {
    departmentApi.listDepartment().then((data) => {
      setDepartment(
        data.sort(function (a, b) {
          return a.department_id - b.department_id;
        })
      );
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSubmit = async () => {
    const payload = {
      department_id: values.department_id,
      department_name: values.department_name,
      location_id: values.location_id,
    };
    await departmentApi.createDepartment(payload).then(() => {
      window.alert(`Data Successfuly Insert`);
      departments();
    });
    setDisplay(false);
  };

  const onDeleted = async (id) => {
    window.confirm(`You sure deleted data ?`)
      ? departmentApi.deletedDepartment(id).then(() => {
          departments();
        })
      : departments();
  };

  return (
    <div>
      <div>
        <h2>List Department</h2>
        <button
          onClick={() => {
            setDisplay(true);
          }}
        >
          Add Department
        </button>
        {display ? (
          <DepartmentAdd
            onSubmitForm={onSubmit}
            handleChange={handleChange}
            setDisplay={setDisplay}
          />
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Department Id</th>
                  <th>Depart Name</th>
                  <th>Loc Id</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {department.map((depart) => (
                  <tr key={depart.department_id}>
                    <td>{depart.department_id}</td>
                    <td>{depart.department_name}</td>
                    <td>{depart.location_id}</td>
                    <button onClick={() => onDeleted(depart.department_id)}>
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
