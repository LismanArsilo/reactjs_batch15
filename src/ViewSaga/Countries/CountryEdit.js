import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetOneCountryRequest,
  EditCountryRequest,
} from "../../Redux-Saga/Action/CountryAction";

export default function CountryEdit() {
  const { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { country } = useSelector((state) => state.countryStated);
  const [values, setValues] = useState({
    country_id: country.country_id,
    country_name: country.country_name,
    region_id: country.region_id,
  });

  useEffect(() => {
    dispatch(GetOneCountryRequest(id));
  }, []);

  const onSubmitForm = async () => {
    const payload = {
      country_id: id,
      country_name: values.country_name,
      region_id: values.region_id,
    };
    dispatch(EditCountryRequest(payload));
    window.alert(`Data Successfully Update`);
    navigate("/country");
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <div className="container">
      <div>
        <h2 className="pt-3 ml-5 text-xl font-bold">Edit Country</h2>
        <form onSubmit={onSubmitForm}>
          <div>
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-700 ml-5 mt-5"
            >
              Country Id :
            </label>
            <input
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700 cursor-not-allowed"
              id="id"
              type="text"
              placeholder="Country Id"
              defaultValue={country.country_id}
              onChange={handleChange("country_id")}
              disabled
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
              defaultValue={country.country_name}
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
              defaultValue={country.region_id}
              placeholder="Region Id"
              onChange={handleChange("region_id")}
            />
          </div>
          <div className="flex justify-end w-2/4">
            <button
              className="px-4 bg-blue-500 rounded-2xl font-semibold hover:bg-blue-700 ring-2 ring-blue-500 mr-3 ml-2"
              type="submit"
            >
              Simpan
            </button>
            <button
              className="px-4 bg-red-500 rounded-2xl font-semibold hover:bg-red-700 ring-2 ring-red-500"
              onClick={() => navigate("/country")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
