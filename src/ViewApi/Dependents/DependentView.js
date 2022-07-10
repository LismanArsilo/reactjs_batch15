import React, { useState, useEffect } from "react";
import dependentApi from "../../api/dependentApi";
import DependentAdd from "./DependentAdd";

export default function DependentView() {
  const [dependent, setDependent] = useState([]);
  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState({
    dependent_id: undefined,
    first_name: undefined,
    last_name: undefined,
    relationship: undefined,
    employee_id: undefined,
  });

  useEffect(() => {
    dependents();
  }, []);

  const dependents = async () => {
    await dependentApi.listDependent().then((data) => {
      setDependent(
        data.sort(function (a, b) {
          return a.dependent_id - b.dependent_id;
        })
      );
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSubmit = async () => {
    const payload = {
      dependent_id: values.dependent_id,
      first_name: values.first_name,
      last_name: values.last_name,
      relationship: values.relationship,
      employee_id: values.employee_id,
    };
    await dependentApi.createDependent(payload).then(() => {
      window.alert(`Data Successfuly Insert `);
      dependents();
    });
    setDisplay(false);
  };

  const onDeleted = async (id) => {
    window.confirm(`You sure deleted Data ?`)
      ? await dependentApi.deletedDependent(id).then(() => {
          dependents();
        })
      : dependents();
  };
  return (
    <div>
      <div>
        <h2>List Dependent</h2>
        <button
          onClick={() => {
            setDisplay(true);
          }}
        >
          Add Dependent
        </button>
        {display ? (
          <DependentAdd
            onSubmitForm={onSubmit}
            handleChange={handleChange}
            setDisplay={setDisplay}
          />
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Dependent Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Relationship</th>
                  <th>Employee Id</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {dependent.map((depen) => (
                  <tr key={depen.dependent_id}>
                    <td>{depen.dependent_id}</td>
                    <td>{depen.first_name}</td>
                    <td>{depen.last_name}</td>
                    <td>{depen.relationship}</td>
                    <td>{depen.employee_id}</td>
                    <button
                      onClick={() => {
                        onDeleted(depen.dependent_id);
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
