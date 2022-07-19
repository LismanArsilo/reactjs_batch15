import React, { useEffect, useState } from "react";
import locationApi from "../../api/locationApi";

export default function LocationEdit(props) {
  const [location, setLocation] = useState([]);

  const locationId = async () => {
    await locationApi.findOne(props.id.locId).then((data) => {
      setLocation(data);
    });
  };

  useEffect(() => {
    locationId();
  }, []);
  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <div>
          <label>Location Id : </label>
          <input
            type="text"
            defaultValue={location.location_id}
            onChange={props.handleChange("location_id")}
            disabled
          />
        </div>

        <div>
          <label>Street Address : </label>
          <input
            type="text"
            defaultValue={location.street_address}
            onChange={props.handleChange("street_address")}
          />
        </div>

        <div>
          <label>Postal Code : </label>
          <input
            type="text"
            defaultValue={location.postal_code}
            onChange={props.handleChange("postal_code")}
          />
        </div>

        <div>
          <label>City : </label>
          <input
            type="text"
            defaultValue={location.city}
            onChange={props.handleChange("city")}
          />
        </div>

        <div>
          <label>State Province : </label>
          <input
            type="text"
            defaultValue={location.state_province}
            onChange={props.handleChange("state_province")}
          />
        </div>

        <div>
          <label>Country Id : </label>
          <input
            type="text"
            defaultValue={location.country_id}
            onChange={props.handleChange("country_id")}
          />
        </div>

        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
