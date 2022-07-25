import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import {
  GetCountryRequest,
  DelCountryRequest,
} from "../../Redux-Saga/Action/CountryAction";

export default function Country() {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countryStated);

  useEffect(() => {
    dispatch(GetCountryRequest());
  }, []);

  const onDelete = async (id) => {
    dispatch(DelCountryRequest(id));
  };

  return (
    <div className="container max-w-full">
      <h2 className="py-3 text-center text-xl font-bold">List of Countries</h2>
      <Link
        to="add"
        className="ring-2 font-semibold ring-button p-1 rounded-lg bg-button hover:bg-purple-700 ml-12"
      >
        + Add Country
      </Link>
      <table className="border-collapse border-slate-500 w-11/12 mt-3 ml-12">
        <thead>
          <tr>
            <th className="border border-slate-600 py-2 w-1/5 bg-gray-300">
              Country Id
            </th>
            <th className="border border-slate-600 py-2 w-2/5 bg-gray-300">
              Country Name
            </th>
            <th className="border border-slate-600 py-2 w-1/5 bg-gray-300">
              Region Id
            </th>
            <th className="border border-slate-600 py-2 w-1/5 bg-gray-300">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(countries)
            ? countries &&
              countries.map((count, index) => {
                return (
                  <tr key={index} className="text-center py-3">
                    <td className="border border-slate-700 py-2">
                      {count.country_id}
                    </td>
                    <td className="border border-slate-700 py-2">
                      {count.country_name}
                    </td>
                    <td className="border border-slate-700 py-2">
                      {count.region_id}
                    </td>
                    <td className="border border-slate-700 py-2">
                      <button
                        className="px-2 bg-red-400 rounded-2xl font-semibold hover:bg-red-600 mr-2 ring-2 ring-red-400"
                        onClick={() => {
                          if (window.confirm("Delete this record")) {
                            onDelete(count.country_id);
                          }
                        }}
                      >
                        Delete
                      </button>
                      <Link
                        to={`edit/${count.country_id}`}
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
      <main>
        {/* Page title & actions */}
        <Outlet />
      </main>
    </div>
  );
}
