import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  GetOneRegionRequest,
  EditRegionRequest,
} from "../../Redux-Saga/Action/RegionAction";

export default function RegionEdit() {
  const { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { region } = useSelector((state) => state.regionStated);
  const [values, setValues] = useState({
    region_name: region.region_name,
  });

  useEffect(() => {
    dispatch(GetOneRegionRequest(id));
  }, []);

  const onSubmitForm = async () => {
    const payload = {
      region_id: id,
      region_name: values.region_name,
    };
    dispatch(EditRegionRequest(payload));
    window.alert(`Data Successfully Update`);
    navigate("/region");
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <div className="container">
      <h2 className="pt-3 ml-5 text-xl font-bold">Edit Region</h2>
      <form onSubmit={onSubmitForm}>
        <div>
          <label
            htmlFor="id"
            className="block text-sm font-medium text-gray-700 ml-5 mt-5"
          >
            Region Id :
          </label>
          <input
            id="name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700 cursor-not-allowed"
            type="text"
            defaultValue={region.region_id}
            disabled
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 ml-5 mt-5"
          >
            Region Name :
          </label>
          <input
            id="name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm rounded-md p-2 w-2/4 m-5 border border-gray-700"
            type="text"
            defaultValue={region.region_name}
            onChange={handleChange("region_name")}
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
            onClick={() => navigate("/region")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
