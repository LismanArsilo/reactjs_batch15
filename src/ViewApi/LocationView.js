import React, { useEffect, useState } from "react";
import locationApi from "../api/locationApi";

export default function LocationView() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    locationApi.listLocation().then((data) => {
      setLocation(
        data.sort(function (a, b) {
          return a.location_id - b.location_id;
        })
      );
    });
  }, []);

  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center" }}>List Location</h2>
        {
          <>
            <table>
              <thead>
                <tr>
                  <th>Location Id</th>
                  <th>Street Adress</th>
                  <th>Postal Code</th>
                  <th>City</th>
                  <th>State Province</th>
                  <th>Country Id</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {location &&
                  location.map((location) => (
                    <tr key={location.location_id}>
                      <td>{location.location_id}</td>
                      <td>{location.street_address}</td>
                      <td>{location.postal_code}</td>
                      <td>{location.city}</td>
                      <td>{location.state_province}</td>
                      <td>{location.country_id}</td>
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
