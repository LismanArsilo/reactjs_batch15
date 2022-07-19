import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import employeeApi from "../../api/employeeApi";
import config from "../../config/config";

export default function EmployeeEdit(props) {
  const [employee, setEmployee] = useState([]);
  const [previewImg, setPreviewImg] = useState();
  const [uploaded, setUploaded] = useState(false);

  const employeeId = async () => {
    await employeeApi.findOne(props.id).then((data) => {
      setEmployee(data);
    });
  };

  useEffect(() => {
    employeeId();
  }, []);

  console.info(employee);

  const formik = useFormik({
    // untuk melakukan set terhadap initialed
    enableReinitialize: true,
    initialValues: {
      employee_id: employee.employee_id,
      first_name: employee.first_name,
      last_name: employee.last_name,
      email: employee.email,
      phone_number: employee.phone_number,
      salary: employee.salary,
      department_id: employee.department_id,
      job_id: employee.job_id,
      manager_id: employee.manager_id,
      emp_profile: employee.emp_profile,
    },
    onSubmit: async (values) => {
      let payload = new FormData();
      payload.append("first_name", values.first_name);
      payload.append("last_name", values.last_name);
      payload.append("email", values.email);
      payload.append("phone_number", values.phone_number);
      payload.append("salary", values.salary);
      payload.append("department_id", parseInt(values.department_id));
      payload.append("job_id", parseInt(values.job_id));
      payload.append("manager_id", parseInt(values.manager_id));
      payload.append("emp_profile", values.profile);
      payload.append("employee_id", values.employee_id);

      await employeeApi.editEmployee(payload).then(() => {
        props.closeAdd();
        window.alert("Data Succesfully Insert");
        props.refresh();
      });
    },
  });

  const uploadOnChange = (name) => (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onload = () => {
      formik.setFieldValue("profile", file);
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
    setUploaded(true);
  };

  const onClearImage = (event) => {
    event.preventDefault();
    setUploaded(false);
    setPreviewImg(null);
  };

  return (
    <div>
      <div>
        <label>First Name :</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          value={formik.values.first_name || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="first_name"
        />
      </div>
      <div>
        <label>Last Name :</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          value={formik.values.last_name || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="last_name"
        />
      </div>
      <div>
        <label>Email :</label>
        <input
          type="text"
          name="email"
          id="email"
          value={formik.values.email || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="email"
        />
      </div>
      <div>
        <label>Phone Number :</label>
        <input
          type="text"
          name="phone_number"
          id="phone_number"
          value={formik.values.phone_number || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="phone_number"
        />
      </div>
      <div>
        <label>Job Id :</label>
        <input
          type="text"
          name="job_id"
          id="job_id"
          value={formik.values.job_id || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="job_id"
        />
      </div>
      <div>
        <label>Salary :</label>
        <input
          type="text"
          name="salary"
          id="salary"
          value={formik.values.salary || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="salary"
        />
      </div>
      <div>
        <label>Manager Id :</label>
        <input
          type="text"
          name="manager_id"
          id="manager_id"
          value={formik.values.manager_id || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="manager_id"
        />
      </div>
      <div>
        <label htmlFor="department_id">Department Id :</label>
        <input
          type="text"
          name="department_id"
          id="department_id"
          value={formik.values.department_id || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="department_id"
        />
      </div>
      <div>
        <label>Profile : </label>
        <div>
          {formik.values.emp_profile == null ? (
            <div>
              <svg
                stroke="currentColor"
                fill="none"
                width={50}
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ) : uploaded === false ? (
            <div>
              <img
                crossOrigin="anonymous"
                src={`${config.domain}/employee/file/${formik.values.emp_profile}`}
                alt="images"
                width={100}
              ></img>
            </div>
          ) : (
            <div>
              <img src={previewImg} alt="image" width={100} />
              <button onClick={onClearImage}>Remove</button>
            </div>
          )}

          <div>
            <label htmlFor="profile">
              <span>Upload a file</span>
              <input
                id="profile"
                name="profile"
                type="file"
                accept="image/*"
                onChange={uploadOnChange("file")}
              />
            </label>
          </div>
          <div>
            <p>or drag and drop</p>
            <p>PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
      <div>
        <button type="submit" onClick={formik.handleSubmit}>
          Simpan
        </button>
        <button onClick={() => props.setDisplay(false)}>Cancel</button>
      </div>
    </div>
  );
}
