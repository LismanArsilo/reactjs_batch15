import React, { useState, useEffect } from "react";
import ChartForm from "./ChartForm";

export default function ChartList() {
  const listChart = [
    { prodId: 1, prodName: "Dell", qty: 1, salary: 5000, Category: "Laptop" },
    { prodId: 2, prodName: "Gamis", qty: 1, salary: 4000, Category: "Baju" },
    {
      prodId: 3,
      prodName: "xiomi",
      qty: 1,
      salary: 6000,
      Category: "Handphone",
    },
  ];
  const [carts, setCarts] = useState(listChart);
  const [Category] = useState([
    "Handphone",
    "Laptop",
    "Baju",
    "Alat Rumah Tangga",
  ]);
  console.info(carts);
  const [totalHrg, setTotalHrg] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState({
    prodName: undefined,
    qty: 0,
    salary: 0,
    Category: undefined,
  });
  useEffect(() => {
    const totalHarga = carts.reduce((sum, el) => sum + el.salary * el.qty, 0);
    setTotalHrg(totalHarga);
    const totalQuantity = carts.reduce((sum, el) => sum + el.qty, 0);
    setTotalQty(totalQuantity);
  }, [carts]);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setCarts([
      ...carts,
      {
        prodId: Object.keys(carts).length + 1,
        prodName: values.prodName,
        qty: Number(values.qty),
        salary: values.salary,
        Category: values.Category,
      },
    ]);
    setDisplay(false);
  };

  const selectOnChange = (e) => {
    const value =
      e.target.selectedIndex !== 0
        ? e.target.options[e.target.selectedIndex].value
        : null;
    setValues({ ...values, Category: value });
  };

  return (
    <div>
      <div>
        <h2>List Employee</h2>
        <button onClick={() => setDisplay(true)}> Add Product</button>
        {display ? (
          <ChartForm
            onSubmitForm={onSubmit}
            handleChange={handleChange}
            Category={Category}
            setDisplay={setDisplay}
            selectOnChange={selectOnChange}
          />
        ) : (
          <>
            <table>
              <tbody>
                <tr>
                  <th>Prod Id</th>
                  <th>Prod Name</th>
                  <th>Qty</th>
                  <th>Salary</th>
                  <th>Category</th>
                  <th>SubTotal</th>
                </tr>
              </tbody>
              <tbody>
                {(carts || []).map((cart, index) => (
                  <tr key={cart.prodId}>
                    <td>{index + 1}</td>
                    <td>{cart.prodName}</td>
                    <td>{cart.qty}</td>
                    <td>{cart.salary}</td>
                    <td>{cart.Category}</td>
                    <td>{cart.qty * cart.salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3>Total Salary : Rp. {totalHrg}</h3>
            <h3>Total Quantity : Rp. {totalQty}</h3>
          </>
        )}
      </div>
    </div>
  );
}
