import React from "react";

export default function RegionAdd(props) {
  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <div>
          <label>Region Name : </label>
          <input
            type="text"
            placeholder="Region Name"
            onChange={props.handleChange("region_name")}
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
