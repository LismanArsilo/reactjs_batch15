import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddRegionRequest } from "../../Redux-Saga/Action/RegionAction";
import { useNavigate } from "react-router";

export default function RegionAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    region_name: "",
  });

  const onSubmitForm = async () => {
    const payload = {
      region_name: values.region_name,
    };
    dispatch(AddRegionRequest(payload));
    navigate("/region");
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="ml-14">
        <form onSubmit={onSubmitForm}>
          <div>
            <label
              for="name"
              className="block text-sm font-medium text-gray-700 ml-5 mt-5"
            >
              Region Name :
            </label>
            <input
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
              id="name"
              type="text"
              placeholder="Region Name"
              onChange={handleChange("region_name")}
            />
          </div>
          <div className="flex justify-end w-2/4 ">
            <button
              type="submit"
              className="px-4 bg-button rounded-2xl font-semibold hover:bg-purple-700 ring-2 ring-button mr-3"
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
