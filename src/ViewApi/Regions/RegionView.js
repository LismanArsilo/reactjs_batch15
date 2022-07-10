import React, { useState, useEffect } from "react";
import regionApi from "../../api/regionApi";
import RegionAdd from "./RegionAdd";

export default function RegionView() {
  const [region, setRegion] = useState([]);
  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState({
    region_name: undefined,
  });

  useEffect(() => {
    regions();
  }, []);

  const regions = async () => {
    regionApi.listRegion().then((data) => {
      // melakukan sort agar data yang di tampilkan sesuai dengan urutan id
      setRegion(
        data.sort(function (a, b) {
          return a.region_id - b.region_id;
        })
      );
    });
  };

  // untuk mengambil data yang di kirimkan di dalam form
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  // untuk menangkap form dan mengirim payload ke api
  const onSubmit = async () => {
    const payload = {
      region_name: values.region_name,
    };
    await regionApi.createRegion(payload).then(() => {
      window.alert(`Data Successfully Insert`);
      regions();
    });
    setDisplay(false);
  };

  const onDeleted = async (id) => {
    // Memberikan kondisi agar data tidak langsung terhapus dengan ternary
    window.confirm(`Your sure deleted data ?`)
      ? regionApi.deletedRegion(id).then(() => {
          regions();
        })
      : regions();
  };

  return (
    <div>
      <div>
        <h2>List Region</h2>
        <button
          onClick={() => {
            setDisplay(true);
          }}
        >
          Add Region
        </button>
        {display ? (
          <RegionAdd
            onSubmitForm={onSubmit}
            handleChange={handleChange}
            setDisplay={setDisplay}
          />
        ) : (
          <table style={{ textAlign: "center" }}>
            <thead>
              <tr>
                <th>Region Id</th>
                <th>Region Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {region.map((reg, index) => (
                <tr key={reg.region_id}>
                  <td>{reg.region_id}</td>
                  <td>{reg.region_name}</td>
                  <button
                    onClick={() => {
                      onDeleted(reg.region_id);
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
