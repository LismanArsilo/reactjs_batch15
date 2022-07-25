import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  GetOneLocationRequest,
  EditLocationRequest,
} from "../../Redux-Saga/Action/LocationAction";

export default function LocationEdit() {
  const { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.locationStated);
  const [values, setValues] = useState({
    location_id: location.location_id,
    street_address: location.street_address,
    postal_code: location.postal_code,
    city: location.city,
    state_province: location.state_province,
    country_id: location.country_id,
  });

  useEffect(() => {
    dispatch(GetOneLocationRequest(id));
  }, []);

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  const onSubmitForm = async () => {
    const payload = {
      location_id: id,
      street_address: values.street_address,
      postal_code: values.postal_code,
      city: values.city,
      state_province: values.state_province,
      country_id: values.country_id,
    };
    dispatch(EditLocationRequest(payload));
    window.alert(`Data Successfully Update`);
    navigate(`/location`);
  };

  return (
    <div className="container ml-6">
      <div className="ml-5 pb-10">
        <h2 className="pt-3 ml-5 text-xl font-bold">Edit Location</h2>
        <form onSubmit={onSubmitForm}>
          <div>
            <label
              htmlFor="location_id"
              className="block text-sm font-medium text-gray-700 ml-5 mt-5"
            >
              Location Id :
            </label>
            <input
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700 cursor-not-allowed"
              type="text"
              id="location_id"
              defaultValue={location.location_id}
              autoComplete="location_id"
              onChange={handleChange("location_id")}
              disabled
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
                defaultValue={location.street_address}
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
                defaultValue={location.postal_code}
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
                defaultValue={location.city}
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
                defaultValue={location.state_province}
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
                defaultValue={location.country_id}
                onChange={handleChange("country_id")}
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
