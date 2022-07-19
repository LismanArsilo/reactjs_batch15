import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import regionApi from "../../api/regionApi";
import RegionAdd from "./RegionAdd";
import RegionEdit from "./RegionEdit";

export default function RegionView() {
  const [region, setRegion] = useState([]);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState({});
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

  const onEdit = async (regId) => {
    setDisplayEdit(true);
    setId(regId);
  };

  const editForm = async () => {
    const payload = {
      region_id: id.regId,
      region_name: values.region_name,
    };
    await regionApi.editRegion(payload).then(() => {
      window.alert(`Data Successfully Update`);
      regions();
    });
    setDisplayEdit(false);
  };

  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center" }}>List Region</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
            width: "400px",
          }}
        >
          <button
            onClick={() => {
              setDisplay(true);
            }}
          >
            Add Region
          </button>
          <Link
            style={{
              border: "1px solid grey",
              borderRadius: "3px",
              fontSize: "0.9rem",
              padding: "3px",
              textDecoration: "none",
              color: "black",
              background: "buttonface",
            }}
            to="/"
          >
            Back Home
          </Link>
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {displayEdit ? (
            <RegionEdit
              onSubmitForm={editForm}
              handleChange={handleChange}
              id={id}
              setDisplay={setDisplayEdit}
            />
          ) : display ? (
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
                    <td>
                      <button
                        onClick={() => {
                          onDeleted(reg.region_id);
                        }}
                      >
                        Deleted
                      </button>
                      <button
                        style={{ margin: "5px" }}
                        onClick={() => {
                          onEdit({ regId: reg.region_id });
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
