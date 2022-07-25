import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetOneEmployeeRequest,
  EditEmployeeRequest,
  EditNoEmployeeRequest,
} from "../../Redux-Saga/Action/EmployeeAction";
import config from "../../config/config";

export default function EmployeeEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { employee } = useSelector((state) => state.employeeStated);
  const [previewImg, setPreviewImg] = useState();
  const [uploaded, setUploaded] = useState(false);

  useEffect(() => {
    dispatch(GetOneEmployeeRequest(id));
  }, []);

  useEffect(() => {
    let img = `${config.domain + "/employee/file/" + employee.emp_profile}`;
    setPreviewImg(img);
  }, [employee]);

  const validateSchema = Yup.object().shape({
    first_name: Yup.string("Enter FirstName").required("Firstname Is Required"),
    last_name: Yup.string("Enter Lastname").required("Lastname is required"),
    email: Yup.string("Enter Email").required("Email is required"),
    phone_number: Yup.string("Enter Phone Number").required(
      "Phone Number is required"
    ),
    job_id: Yup.string("Enter Job ID").required("Job ID is required"),
    salary: Yup.string("Enter Salary").required("Salary is required"),
    manager_id: Yup.string("Enter Manager ID").required(
      "Manager ID is required"
    ),
    department_id: Yup.string("Enter Department ID").required(
      "Department ID is required"
    ),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: employee.first_name,
      last_name: employee.last_name,
      email: employee.email,
      phone_number: employee.phone_number,
      job_id: employee.job_id,
      salary: employee.salary,
      manager_id: employee.manager_id,
      department_id: employee.department_id,
      emp_profile: employee.emp_profile,
    },
    validationSchema: validateSchema,
    onSubmit: async (values) => {
      if (uploaded === true) {
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
        dispatch(EditEmployeeRequest(payload));
      } else {
        const payload = {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          phone_number: values.phone_number,
          job_id: parseInt(values.job_id),
          salary: values.salary,
          manager_id: parseInt(values.manager_id),
          department_id: parseInt(values.department_id),
          employee_id: parseInt(employee.employee_id),
        };
        dispatch(EditNoEmployeeRequest(payload));
      }
      window.alert(`Data Update Successfully`);
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
    setPreviewImg(null);
  };
  return (
    <div className="container ml-6">
      <div className="ml-5 pb-10">
        <div>
          <label
            htmlFor="employee_id"
            className="block text-sm font-medium text-gray-700 ml-5 mt-5"
          >
            Employee Id :
          </label>
          <input
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700 cursor-not-allowed"
            type="text"
            defaultValue={employee.employee_id || ""}
            disabled
          />
        </div>

        <div>
          <label
            htmlFor="first_name"
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
            htmlFor="last_name"
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
          {formik.touched.last_name && formik.errors.last_name ? (
            <p>{formik.errors.last_name}</p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="email"
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
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="phone_number"
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
          {formik.touched.phone_number && formik.errors.phone_number ? (
            <p>{formik.errors.phone_number}</p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="salary"
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
          {formik.touched.salary && formik.errors.salary ? (
            <p>{formik.errors.salary}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="department_id"
            className="block text-sm font-medium text-gray-700 ml-5 mt-5"
          >
            Department Id :
          </label>
          <input
            type="number"
            name="department_id"
            id="department_id"
            value={formik.values.department_id || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="department_id"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
          />
          {formik.touched.department_id && formik.errors.department_id ? (
            <p>{formik.errors.department_id}</p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="job_id"
            className="block text-sm font-medium text-gray-700 ml-5 mt-5"
          >
            Job Id :
          </label>
          <input
            type="number"
            name="job_id"
            id="job_id"
            value={formik.values.job_id || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
            autoComplete="job_id"
          />
          {formik.touched.job_id && formik.errors.job_id ? (
            <p>{formik.errors.job_id}</p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="manager_id"
            className="block text-sm font-medium text-gray-700 ml-5 mt-5"
          >
            Manager Id :
          </label>
          <input
            type="number"
            name="manager_id"
            id="manager_id"
            value={formik.values.manager_id || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
            autoComplete="manager_id"
          />
          {formik.touched.manager_id && formik.errors.manager_id ? (
            <p>{formik.errors.manager_id}</p>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 ml-5 mt-5">
            Profile :
          </label>
          <div className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700 flex flex-col items-center">
            {previewImg === `${config.domain + "/employee/file/null"}` ? (
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
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
            ) : (
              <>
                <img
                  crossOrigin="anonymous"
                  src={previewImg}
                  alt="image"
                  width={100}
                />
                <button
                  className="hover:bg-gray-400 ml-20"
                  onClick={onClearImage}
                >
                  ⨉
                </button>
              </>
            )}

            <div className="flex flex-col text-center">
              <div>
                <label htmlFor="profile">
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
            className="px-4 bg-blue-500 rounded-2xl font-semibold hover:bg-blue-700 ring-2 ring-blue-500 mr-3 ml-2"
            type="submit"
            onClick={formik.handleSubmit}
          >
            Simpan
          </button>
          <button
            className="px-4 bg-red-500 rounded-2xl font-semibold hover:bg-red-700 ring-2 ring-red-500"
            onClick={() => navigate("/employee")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
