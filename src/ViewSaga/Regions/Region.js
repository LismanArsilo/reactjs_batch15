import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import {
  GetRegionRequest,
  DelRegionRequest,
} from "../../Redux-Saga/Action/RegionAction";

export default function Region() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state) => state.regionStated);

  useEffect(() => {
    dispatch(GetRegionRequest());
  }, []);

  const onDelete = async (id) => {
    dispatch(DelRegionRequest(id));
  };

  return (
    <div className="container max-w-full">
      <h2 className="py-3 text-center text-xl font-bold">List of Regions</h2>
      <Link
        to="add"
        className="ring-2 font-semibold ring-button p-1 rounded-lg bg-button hover:bg-purple-700 ml-12"
      >
        + Add Region
      </Link>
      <table className="border-collapse border-slate-500 w-11/12 mt-3 ml-12">
        <thead>
          <tr>
            <th className="border border-slate-600 py-2 w-1/4 bg-gray-300">
              Region Id
            </th>
            <th className="border border-slate-600 py-2 w-2/4 bg-gray-300">
              Region Name
            </th>
            <th className="border border-slate-600 py-2 w-1/4 bg-gray-300">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {regions &&
            regions.map((reg, index) => {
              return (
                <tr key={index} className="text-center py-3">
                  <td className="border border-slate-700 py-2">
                    {reg.region_id}
                  </td>
                  <td className="border border-slate-700 py-2">
                    {reg.region_name}
                  </td>
                  <td className="border border-slate-700 py-2 ">
                    <button
                      className="px-2 bg-button rounded-2xl font-semibold hover:bg-purple-700 mr-2 ring-2 ring-button "
                      onClick={() => {
                        if (window.confirm("Delete this record")) {
                          onDelete(reg.region_id);
                        }
                      }}
                    >
                      Delete
                    </button>
                    <button className="px-4 bg-button rounded-2xl font-semibold hover:bg-purple-700 ring-2 ring-button">
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
