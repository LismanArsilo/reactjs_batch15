import React, { useState, useEffect } from "react";
import regionApi from "../api/regionApi";

export default function RegionView() {
  const [region, setRegion] = useState([]);
  useEffect(() => {
    regionApi.listRegion().then((data) => {
      // melakukan sort agar data yang di tampilkan sesuai dengan urutan id
      setRegion(
        data.sort(function (a, b) {
          return a.region_id - b.region_id;
        })
      );
    });
  }, []);
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center" }}>List Region</h2>
        {
          <>
            <table>
              <thead>
                <tr>
                  <th>Region Id</th>
                  <th>Region Name</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {region &&
                  region.map((reg, index) => (
                    <tr key={reg.region_id}>
                      <td>{reg.region_id}</td>
                      <td>{reg.region_name}</td>
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
