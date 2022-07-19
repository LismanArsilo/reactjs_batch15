import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddCountryRequest } from "../../Redux-Saga/Action/CountryAction";
import { useNavigate } from "react-router-dom";

export default function CountryAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    country_id: "",
    country_name: "",
    region_id: "",
  });

  const onSubmitForm = async () => {
    const payload = {
      country_id: values.country_id,
      country_name: values.country_name,
      region_id: values.region_id,
    };
    dispatch(AddCountryRequest(payload));
    navigate("/country");
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div>
          <label>Country Id :</label>
          <input
            type="text"
            placeholder="Country Id"
            onChange={handleChange("country_id")}
          />
        </div>
        <div>
          <label>Country Name :</label>
          <input
            type="text"
            placeholder="Country Name"
            onChange={handleChange("country_name")}
          />
        </div>
        <div>
          <label>Region Id :</label>
          <input
            type="text"
            placeholder="Region Id"
            onChange={handleChange("region_id")}
          />
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => navigate("/region")}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
