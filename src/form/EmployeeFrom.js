import React, { useState, useEffect } from "react";

export default function EmployeeFrom() {
  const listEmployee = [
    {
      empId: 1,
      fullName: "Lisman",
      salary: 6000,
    },
    {
      empId: 2,
      fullName: "Arsilo",
      salary: 5000,
    },
    {
      empId: 3,
      fullName: "Iman",
      salary: 4000,
    },
  ];
  const [employee, setEmployee] = useState(listEmployee);
  const [total, setTotal] = useState(0);
  const [values, setValues] = useState({
    id: 0,
    fullName: undefined,
    salary: 0,
  });
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const totalSalary = employee.reduce((sum, el) => sum + el.salary, 0);
    setTotal(totalSalary);
  }, [employee]);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setEmployee([
      ...employee,
      {
        empId: Object(employee).length + 1,
        fullName: values.fullName,
        salary: Number(values.salary),
      },
    ]);
    setDisplay(false);
  };

  const renderForm = () => {
    return (
      <form onSubmit={onSubmit}>
        <div>
          <label>Full Name :</label>
          <input
            type="text"
            placeholder="Full Name"
            onChange={handleChange("fullName")}
          ></input>
        </div>

        <div>
          <label>salary :</label>
          <input
            type="text"
            placeholder="Salary"
            onChange={handleChange("salary")}
          ></input>
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => setDisplay(false)}>Cancel</button>
        </div>
      </form>
    );
  };

  return (
    <div>
      <h2>List Employee</h2>
      <button onClick={() => setDisplay(true)}> Add Employee</button>
      {display ? (
        renderForm()
      ) : (
        <>
          <table>
            <tbody>
              <tr>
                <th>Employee ID</th>
                <th>Full Name</th>
                <th>Salary</th>
              </tr>
            </tbody>
            <tbody>
              {(employee || []).map((emp, index) => (
                <tr key={emp.empId}>
                  <td>{index + 1}</td>
                  <td>{emp.fullName}</td>
                  <td>{emp.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Salary : Rp. {total}</h3>
        </>
      )}
    </div>
  );
}
