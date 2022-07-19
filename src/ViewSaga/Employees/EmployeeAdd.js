import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AddEmployeeRequest } from "../../Redux-Saga/Action/EmployeeAction";
import * as Yup from "yup";

export default function EmployeeAdd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [previewImg, setPreviewImg] = useState();
  const [uploaded, setUploaded] = useState(false);

  const validateSchema = Yup.object().shape({
    first_name: Yup.string("Enter FirstName").required("Firstname Is Required"),
  });

  const formik = useFormik({
    initialValues: {
      employee_id: "",
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      salary: 0,
      department_id: 0,
      job_id: 0,
      manager_id: 0,
      emp_profile: undefined,
    },
    validationSchema: validateSchema,
    onSubmit: async (values) => {
      let payload = new FormData();
      payload.append("employee_id", parseInt(values.employee_id));
      payload.append("first_name", values.first_name);
      payload.append("last_name", values.last_name);
      payload.append("email", values.email);
      payload.append("phone_number", values.phone_number);
      payload.append("salary", values.salary);
      payload.append("department_id", parseInt(values.department_id));
      payload.append("job_id", parseInt(values.job_id));
      payload.append("manager_id", parseInt(values.manager_id));
      payload.append("emp_profile", values.profile);

      dispatch(AddEmployeeRequest(payload));
      window.alert("Data Succesfully Insert");
      navigate("/employee");
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
    setPreviewImg(undefined);
  };
  return (
    <div className="container ml-6">
      <div className="ml-5 pb-10">
        <div>
          <label
            for="employee_id"
            className="block text-sm font-medium text-gray-700 ml-5 mt-5"
          >
            Employee Id :
          </label>
          <input
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
            type="text"
            name="employee_id"
            id="employee_id"
            value={formik.values.employee_id || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="employee_id"
          />
        </div>

        <div>
          <label
            for="first_name"
            className="block text-sm font-medium text-gray-700 ml-5 mt-5"
          >
            First Name :
          </label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            value={formik.values.first_name || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="first_name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
          />
          {formik.touched.first_name && formik.errors.first_name ? (
            <p>{formik.errors.first_name}</p>
          ) : null}
        </div>
        <div>
          <label
            for="last_name"
            className="block text-sm font-medium text-gray-700 ml-5 mt-5"
          >
            Last Name :
          </label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            value={formik.values.last_name || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
            autoComplete="last_name"
          />
        </div>
        <div>
          <label
            for="email"
            className="block text-sm font-medium text-gray-700 ml-5 mt-5"
          >
            Email :
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={formik.values.email || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
            autoComplete="email"
          />
        </div>
        <div>
          <label
            for="phone_number"
            className="block text-sm font-medium text-gray-700 ml-5 mt-5"
          >
            Phone Number :
          </label>
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            value={formik.values.phone_number || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
            autoComplete="phone_number"
          />
        </div>
        <div>
          <label
            for="job_id"
            className="block text-sm font-medium text-gray-700 ml-5 mt-5"
          >
            Job Id :
          </label>
          <input
            type="text"
            name="job_id"
            id="job_id"
            value={formik.values.job_id || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
            autoComplete="job_id"
          />
        </div>
        <div>
          <label
            for="salary"
            className="block text-sm font-medium text-gray-700 ml-5 mt-5"
          >
            Salary :
          </label>
          <input
            type="text"
            name="salary"
            id="salary"
            value={formik.values.salary || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
            autoComplete="salary"
          />
        </div>
        <div>
          <label
            for="manager_id"
            className="block text-sm font-medium text-gray-700 ml-5 mt-5"
          >
            Manager Id :
          </label>
          <input
            type="text"
            name="manager_id"
            id="manager_id"
            value={formik.values.manager_id || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
            autoComplete="manager_id"
          />
        </div>
        <div>
          <label
            for="department_id"
            className="block text-sm font-medium text-gray-700 ml-5 mt-5"
          >
            Department Id :
          </label>
          <input
            type="text"
            name="department_id"
            id="department_id"
            value={formik.values.department_id || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="department_id"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 ml-5 mt-5">
            Profile :
          </label>
          <div className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700 flex flex-col items-center">
            {uploaded === false ? (
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
            ) : (
              <div className="text-right">
                <img src={previewImg} alt="image" width={100} />
                <button className="hover:bg-gray-400" onClick={onClearImage}>
                  ⨉
                </button>
              </div>
            )}

            <div className="flex flex-col text-center">
              <div>
                <label for="profile">
                  <p>Upload a file</p>
                  <input
                    className="ml-40 "
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
        </div>
        <div className="flex justify-end w-2/4">
          <button
            className="px-4 bg-button rounded-2xl font-semibold hover:bg-purple-700 ring-2 ring-button mr-3 ml-2"
            type="submit"
            onClick={formik.handleSubmit}
          >
            Simpan
          </button>
          <button
            className="px-4 bg-button rounded-2xl font-semibold hover:bg-purple-700 ring-2 ring-button "
            onClick={() => navigate("/employee")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
