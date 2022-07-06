import React, { useState, useEffect } from "react";
import countryApi from "../api/countryApi";

export default function CountryView() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    countryApi.listCountry().then((data) => {
      setCountry(data);
    });
  }, []);
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center" }}>List Country</h2>
        {
          <>
            <table>
              <thead>
                <tr>
                  <th>Country Id</th>
                  <th>Country Name</th>
                  <th>Region Id</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {country &&
                  country.map((country) => (
                    <tr key={country.country_id}>
                      <td>{country.country_id}</td>
                      <td>{country.country_name}</td>
                      <td>{country.region_id}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        }
      </div>
    </div>
  );
}
