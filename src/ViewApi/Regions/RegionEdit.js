import React, { useEffect, useState } from "react";
import regionApi from "../../api/regionApi";

export default function RegionEdit(props) {
  const [region, setRegion] = useState([]);

  const regionId = async () => {
    await regionApi.findOne(props.id.regId).then((data) => {
      setRegion(data);
    });
  };
  console.info(region);
  useEffect(() => {
    regionId();
  }, []);

  return (
    <div>
      <h2>Edit Region</h2>
      <form onSubmit={props.onSubmitForm}>
        <div>
          <label>Region Name : </label>
          <input
            type="text"
            defaultValue={region.region_id}
            onChange={props.handleChange("region_name")}
            disabled
          />
        </div>
        <div>
          <label> Region Name : </label>
          <input
            type="text"
            defaultValue={region.region_name}
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
