import React, { useEffect, useState } from "react";
import countryApi from "../../api/countryApi";

export default function CountryEdit(props) {
  const [country, setCountry] = useState([]);

  const countryId = async () => {
    await countryApi.findOne(props.id.countId).then((data) => {
      setCountry(data);
    });
  };
  useEffect(() => {
    countryId();
  }, []);

  return (
    <div>
      <h2>Form Edit Country</h2>
      <form onSubmit={props.onSubmitForm}>
        <div>
          <label>Country Id : </label>
          <input
            type="text"
            defaultValue={country.country_id}
            onChange={props.handleChange("country_id")}
            disabled
          />
        </div>

        <div>
          <label>Country Name : </label>
          <input
            type="text"
            defaultValue={country.country_name}
            onChange={props.handleChange("country_name")}
          />
        </div>

        <div>
          <label>Region Id : </label>
          <input
            type="text"
            defaultValue={country.region_id}
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
