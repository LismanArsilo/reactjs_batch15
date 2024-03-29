import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddCountryRequest } from "../../Redux-Saga/Action/CountryAction";
import { useNavigate } from "react-router-dom";

export default function CountryAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    country_id: "",
    country_name: "",
    region_id: "",
  });

  const onSubmitForm = async () => {
    const payload = {
      country_id: values.country_id,
      country_name: values.country_name,
      region_id: values.region_id,
    };
    dispatch(AddCountryRequest(payload));
    navigate("/country");
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <div className="container">
      <div>
        <h2 className="pt-3 ml-5 text-xl font-bold">Add Country</h2>
        <form onSubmit={onSubmitForm}>
          <div>
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-700 ml-5 mt-5"
            >
              Country Id :
            </label>
            <input
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
              id="id"
              type="text"
              placeholder="Country Id"
              onChange={handleChange("country_id")}
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 ml-5 mt-5"
            >
              Country Name :
            </label>
            <input
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
              id="name"
              type="text"
              placeholder="Country Name"
              onChange={handleChange("country_name")}
            />
          </div>
          <div>
            <label
              htmlFor="region"
              className="block text-sm font-medium text-gray-700 ml-5 mt-5"
            >
              Region Id :
            </label>
            <input
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
              id="region"
              type="text"
              placeholder="Region Id"
              onChange={handleChange("region_id")}
            />
          </div>
          <div className="flex justify-end w-2/4">
            <button
              className="px-4 bg-button rounded-2xl font-semibold hover:bg-purple-700 ring-2 ring-button mr-3 cursor-progress"
              type="submit"
            >
              Simpan
            </button>
            <button
              className="px-4 bg-button rounded-2xl font-semibold hover:bg-purple-700 ring-2 ring-button"
              onClick={() => navigate("/region")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
