import React, { useEffect, useState } from "react";

export default function ChartItem() {
  const listChart = [
    { prodId: 1, prodName: "Shampoo", qty: 1, salary: 5000 },
    { prodId: 2, prodName: "Shoap", qty: 1, salary: 4000 },
    { prodId: 3, prodName: "Tooth Paste", qty: 1, salary: 6000 },
  ];
  const [chart, setCart] = useState(listChart);
  const [total, setTotal] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const CounterIncrement = (id) => {
    setCart([
      ...chart.map((carts) => {
        if (id === carts.prodId) {
          carts.qty = carts.qty + 1;
          return carts;
        } else {
          return carts;
        }
      }),
    ]);
  };
  const CounterDecrement = (id) => {
    setCart([
      ...chart.map((carts) => {
        if (id === carts.prodId) {
          if (carts.qty <= 0) {
            return carts;
          }
          carts.qty = carts.qty - 1;
          return carts;
        } else {
          return carts;
        }
      }),
    ]);
  };

  useEffect(() => {
    const totalHarga = chart.reduce((sum, el) => sum + el.salary * el.qty, 0);
    setTotal(totalHarga);
    const totalQuatity = chart.reduce((sum, el) => sum + el.qty, 0);
    setTotalQty(totalQuatity);
  }, [chart]);
  return (
    <div>
      <h2>List Of Charts</h2>
      <table>
        <thead>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Salary</th>
          <th>Sub Total</th>
          <th>Action</th>
        </thead>
        <tbody>
          {(chart || []).map((carts) => (
            <tr key={carts.prodId}>
              <td>{carts.prodId}</td>
              <td>{carts.prodName}</td>
              <td>{carts.qty}</td>
              <td>{carts.salary}</td>
              <td>{carts.qty * carts.salary}</td>
              <td>
                <button onClick={() => CounterIncrement(carts.prodId)}>
                  +
                </button>
                <button onClick={() => CounterDecrement(carts.prodId)}>
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Harga : Rp. {total.toLocaleString("id-ID")} </h3>
      <h3>Total Quantity : {totalQty} </h3>
    </div>
  );
}
