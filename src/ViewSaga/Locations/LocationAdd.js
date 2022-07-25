import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AddLocationRequest } from "../../Redux-Saga/Action/LocationAction";
import * as Yup from "yup";

export default function LocationAdd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    location_id: "",
    street_address: "",
    postal_code: "",
    city: "",
    state_province: "",
    country_id: "",
  });

  const onSubmitForm = async () => {
    const payload = {
      location_id: values.location_id,
      street_address: values.street_address,
      postal_code: values.postal_code,
      city: values.city,
      state_province: values.state_province,
      country_id: values.country_id,
    };
    dispatch(AddLocationRequest(payload));
    window.alert("Data Insert Successfuly");
    navigate("/location");
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  return (
    <div className="container ml-6">
      <div className="ml-5 pb-10">
        <form onSubmit={onSubmitForm}>
          <div>
            <label
              htmlFor="location_id"
              className="block text-sm font-medium text-gray-700 ml-5 mt-5"
            >
              Location Id :
            </label>
            <input
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
              type="text"
              id="location_id"
              autoComplete="location_id"
              onChange={handleChange("location_id")}
            />

            <div>
              <label
                htmlFor="street_address"
                className="block text-sm font-medium text-gray-700 ml-5 mt-5"
              >
                Street Address :
              </label>
              <input
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
                type="text"
                id="street_address"
                onChange={handleChange("street_address")}
              />
            </div>
            <div>
              <label
                htmlFor="postal_code"
                className="block text-sm font-medium text-gray-700 ml-5 mt-5"
              >
                Postal Code :
              </label>
              <input
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
                type="text"
                id="postal_code"
                onChange={handleChange("postal_code")}
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 ml-5 mt-5"
              >
                City :
              </label>
              <input
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
                type="text"
                id="city"
                onChange={handleChange("city")}
              />
            </div>
            <div>
              <label
                htmlFor="state_province"
                className="block text-sm font-medium text-gray-700 ml-5 mt-5"
              >
                State Province :
              </label>
              <input
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
                type="text"
                id="state_province"
                onChange={handleChange("state_province")}
              />
            </div>

            <div>
              <label
                htmlFor="country_id"
                className="block text-sm font-medium text-gray-700 ml-5 mt-5"
              >
                Country Id :
              </label>
              <input
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
                type="text"
                id="country_id"
                onChange={handleChange("country_id")}
              />
            </div>
            <div className="flex justify-end w-2/4">
              <button
                className="px-4 bg-button rounded-2xl font-semibold hover:bg-purple-700 ring-2 ring-button mr-3 ml-2"
                type="submit"
              >
                Simpan
              </button>
              <button
                className="px-4 bg-button rounded-2xl font-semibold hover:bg-purple-700 ring-2 ring-button "
                onClick={() => navigate("/location")}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
