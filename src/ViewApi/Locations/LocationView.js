import React, { useEffect, useState } from "react";
import locationApi from "../../api/locationApi";
import LocationAdd from "./LocationAdd";

export default function LocationView() {
  const [location, setLocation] = useState([]);
  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState({
    location_id: undefined,
    street_address: undefined,
    postal_code: undefined,
    city: undefined,
    state_province: undefined,
    country_id: undefined,
  });

  useEffect(() => {
    locations();
  }, []);

  // melakukan get dan di simpan ke dalam variabel agar dapat di gunakan kembali
  const locations = async () => {
    locationApi.listLocation().then((data) => {
      setLocation(
        data.sort(function (a, b) {
          return a.location_id - b.location_id;
        })
      );
    });
  };

  // Mengambil data dari form yang di isi
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  // Menangkap form yang sudah di isi dan mengirim payload ke api
  const onSubmit = async () => {
    const payload = {
      location_id: values.location_id,
      street_address: values.street_address,
      postal_code: values.postal_code,
      city: values.city,
      state_province: values.state_province,
      country_id: values.country_id,
    };
    await locationApi.createLocation(payload).then(() => {
      window.alert(`Date Successfuly Insert`);
      locations();
    });
    setDisplay(false);
  };

  // Memberikan kondisi agar data tidak langsung terhapus dengan ternary
  const onDeleted = async (id) => {
    window.confirm(`You sure deleted data ?`)
      ? locationApi.deletedLocation(id).then(() => {
          locations();
        })
      : locations();
  };
  return (
    <div>
      <div>
        <h2>List Location</h2>
        <button
          onClick={() => {
            setDisplay(true);
          }}
        >
          Add Location
        </button>
        {display ? (
          <LocationAdd
            onSubmitForm={onSubmit}
            handleChange={handleChange}
            setDisplay={setDisplay}
          />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Location Id</th>
                <th>Street Adress</th>
                <th>Postal Code</th>
                <th>City</th>
                <th>State Province</th>
                <th>Country Id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              {location.map((location) => (
                <tr key={location.location_id}>
                  <td>{location.location_id}</td>
                  <td>{location.street_address}</td>
                  <td>{location.postal_code}</td>
                  <td>{location.city}</td>
                  <td>{location.state_province}</td>
                  <td>{location.country_id}</td>
                  <button
                    onClick={() => {
                      onDeleted(location.location_id);
                    }}
                  >
                    Deleted
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
