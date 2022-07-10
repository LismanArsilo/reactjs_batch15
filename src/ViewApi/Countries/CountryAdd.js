import React from "react";

export default function CountryAdd(props) {
  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <div>
          <label>Country Id : </label>
          <input
            type="text"
            placeholder="Country id"
            onChange={props.handleChange("country_id")}
          />
        </div>

        <div>
          <label>Country Name : </label>
          <input
            type="text"
            placeholder="Country Name"
            onChange={props.handleChange("country_name")}
          />
        </div>

        <div>
          <label>Region Id : </label>
          <input
            type="text"
            placeholder="Region Id"
            onChange={props.handleChange("region_id")}
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
