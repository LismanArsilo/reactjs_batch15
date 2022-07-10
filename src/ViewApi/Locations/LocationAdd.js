import React from "react";

export default function LocationAdd(props) {
  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <div>
          <label>Location Id : </label>
          <input
            type="text"
            placeholder="Location Id"
            onChange={props.handleChange("location_id")}
          />
        </div>

        <div>
          <label>Street Address : </label>
          <input
            type="text"
            placeholder="Street Address"
            onChange={props.handleChange("street_address")}
          />
        </div>

        <div>
          <label>Postal Code : </label>
          <input
            type="text"
            placeholder="Postal Code"
            onChange={props.handleChange("postal_code")}
          />
        </div>

        <div>
          <label>City : </label>
          <input
            type="text"
            placeholder="City"
            onChange={props.handleChange("city")}
          />
        </div>

        <div>
          <label>State Province : </label>
          <input
            type="text"
            placeholder="State Province"
            onChange={props.handleChange("state_province")}
          />
        </div>

        <div>
          <label>Country Id : </label>
          <input
            type="text"
            placeholder="Country Id"
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
