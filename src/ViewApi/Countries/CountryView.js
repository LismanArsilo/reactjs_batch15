import React, { useState, useEffect } from "react";
import countryApi from "../../api/countryApi";
import CountryAdd from "./CountryAdd";
import CountryEdit from "./CountryEdit";

export default function CountryView() {
  const [country, setCountry] = useState([]);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState({
    countId: undefined,
  });
  const [values, setValues] = useState({
    country_id: undefined,
    country_name: undefined,
    region_id: undefined,
  });

  useEffect(() => {
    countries();
  }, []);

  const countries = async () => {
    await countryApi.listCountry().then((data) => {
      setCountry(data);
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSubmit = async () => {
    const payload = {
      country_id: values.country_id,
      country_name: values.country_name,
      region_id: values.region_id,
    };
    await countryApi.createCountry(payload).then(() => {
      countries();
      window.alert(`Data Successfully Insert`);
    });
    setDisplay(false);
  };

  const onDeleted = async (id) => {
    window.confirm(`Your sure deleted data ?`)
      ? countryApi.deletedCountry(id).then(() => {
          countries();
        })
      : countries();
  };

  const onEdit = async (id) => {
    setDisplayEdit(true);
    setId(id);
  };

  const editFrom = async () => {
    const payload = {
      country_id: id.countId,
      country_name: values.country_name,
      region_id: values.region_id,
    };
    await countryApi.editCountry(payload).then(() => {
      window.alert(`Data Successfully Update`);
      countries();
    });
    setDisplayEdit(false);
  };

  return (
    <div>
      <div>
        <h2>List Country</h2>
        <button
          onClick={() => {
            setDisplay(true);
          }}
        >
          Add Country
        </button>
        {displayEdit ? (
          <CountryEdit
            onSubmitForm={editFrom}
            handleChange={handleChange}
            id={id}
            setDisplay={setDisplayEdit}
          />
        ) : display ? (
          <CountryAdd
            onSubmitForm={onSubmit}
            handleChange={handleChange}
            setDisplay={setDisplay}
          />
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Country Id</th>
                  <th>Country Name</th>
                  <th>Region Id</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {country.map((country) => (
                  <tr key={country.country_id}>
                    <td>{country.country_id}</td>
                    <td>{country.country_name}</td>
                    <td>{country.region_id}</td>
                    <td>
                      <button
                        onClick={() => {
                          onDeleted(country.country_id);
                        }}
                      >
                        Deleted
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => {
                          onEdit({ countId: country.country_id });
                        }}
                      >
                        Edit Country
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}
