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
    <div>
      <h2>List of Countries</h2>
      <Link to="add">Add Country</Link>
      <table>
        <thead>
          <tr>
            <td>Country Id</td>
            <td>Country Name</td>
            <td>Region Id</td>
          </tr>
        </thead>
        <tbody>
          {countries &&
            countries.map((count, index) => {
              return (
                <tr key={index}>
                  <td>{count.country_id}</td>
                  <td>{count.country_name}</td>
                  <td>{count.region_id}</td>
                  <td>
                    <button
                      onClick={() => {
                        if (window.confirm("Delete this record")) {
                          onDelete(count.country_id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <main>
        {/* Page title & actions */}
        <Outlet />
      </main>
    </div>
  );
}
