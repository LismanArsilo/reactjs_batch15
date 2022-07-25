import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  GetLocationRequest,
  DelLocationRequest,
} from "../../Redux-Saga/Action/LocationAction";

export default function Location() {
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state.locationStated);

  useEffect(() => {
    dispatch(GetLocationRequest());
  }, []);

  const onDelete = async (id) => {
    dispatch(DelLocationRequest(id));
  };

  return (
    <div>
      <div className="container max-w-full">
        <h2 className="py-3 text-center text-xl font-bold">
          List of Locations
        </h2>
        <Link
          to="add"
          className="ring-2 font-semibold ring-button p-1 rounded-lg bg-button hover:bg-purple-700 ml-12"
        >
          + Add Location
        </Link>
        <table className="border-collapse border-slate-500 w-11/12 mt-3 ml-12">
          <thead>
            <tr>
              <th className="border border-slate-600 py-2 w-1/8 bg-gray-300">
                Location Id
              </th>
              <th className="border border-slate-600 py-2 w-1/8 bg-gray-300">
                Street Address
              </th>
              <th className="border border-slate-600 py-2 w-1/8 bg-gray-300">
                Postal Code
              </th>
              <th className="border border-slate-600 py-2 w-1/8 bg-gray-300">
                City
              </th>
              <th className="border border-slate-600 py-2 w-1/8 bg-gray-300">
                State Province
              </th>
              <th className="border border-slate-600 py-2 w-1/8 bg-gray-300">
                Country Id
              </th>
              <th className="border border-slate-600 py-2 w-2/8 bg-gray-300">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(locations)
              ? locations &&
                locations.map((loc, index) => {
                  return (
                    <tr key={index} className="text-center py-3">
                      <td className="border border-slate-700 py-2">
                        {loc.location_id}
                      </td>
                      <td className="border border-slate-700 py-2">
                        {loc.street_address}
                      </td>
                      <td className="border border-slate-700 py-2">
                        {loc.postal_code == null ? (
                          <span className="text-red-600">Not Found</span>
                        ) : (
                          loc.postal_code
                        )}
                      </td>
                      <td className="border border-slate-700 py-2">
                        {loc.city}
                      </td>
                      <td className="border border-slate-700 py-2">
                        {loc.state_province == null ? (
                          <span className="text-red-600">Not Found</span>
                        ) : (
                          loc.state_province
                        )}
                      </td>
                      <td className="border border-slate-700 py-2">
                        {loc.country_id}
                      </td>
                      <td className="border border-slate-700 py-2 ">
                        <button
                          className="px-2 bg-red-400 rounded-2xl font-semibold hover:bg-red-600 mr-2 ring-2 ring-red-400"
                          onClick={() => {
                            if (window.confirm("Delete this record")) {
                              onDelete(loc.location_id);
                            }
                          }}
                        >
                          Delete
                        </button>
                        <Link
                          to={`edit/${loc.location_id}`}
                          className="px-4 bg-green-400 rounded-2xl font-semibold hover:bg-green-600 ring-2 ring-green-400"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
